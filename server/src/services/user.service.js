import userRepositories from "../repositories/user.repositories.js";
import authService from "../services/auth.service.js";
import postRepositories from "../repositories/post.repositories.js";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  username,
  email,
  password,
  avatar,
  background,
}) => {
  if (!username || !name || !email || !password || !avatar || !background)
    throw new Error("Envie todos os campos para cadastro");

  const foundUser = await userRepositories.findByEmailUserRepository(email);

  if (foundUser) throw new Error("Usuário já existe");

  const user = await userRepositories.createUserRepository({
    name,
    username,
    email,
    password,
    avatar,
    background,
  });

  if (!user) throw new Error("Erro ao criar usuário");

  const token = authService.generateToken(user.id);

  return token;
};

const findAllUserService = async () => {
  const users = await userRepositories.findAllUserRepository();

  if (users.length === 0) throw new Erro("Não há usuários cadastrados");

  return users;
};

const findUserByUsernameService = async (username) => {
  const user = await userRepositories.findByUsernameRepository(username);
  return user;
};

const findUserByIdService = async (userIdParam, userIdLogged) => {
  const idParam = userIdParam ? userIdParam : userIdLogged;

  if (!idParam)
    throw new Error("Envie um id nos parâmetros para procurar o usuário");

  const user = await userRepositories.findByIdUserRepository(idParam);

  if (!user) throw new Error("Usuário não encontrado");

  return user;
};

const updateUserService = async (userUpdate, userId, userIdLogged) => {
  if (Object.keys(userUpdate).length === 0)
    throw new Error("Envie pelo menos um campo para atualizar o usuário");

  const user = await userRepositories.findByIdUserRepository(userId);

  if (user._id == userIdLogged) {
    const isPasswordValid = await bcrypt.compare(
      userUpdate.password,
      user.password,
    );

    if (isPasswordValid) {
      userUpdate.password = await bcrypt.hash(userUpdate.newPassword, 10);

      userRepositories.updateUserRepository(userId, userUpdate);

      return { message: "Usuário atualizado com sucesso!" };
    }
  }
  throw new Error("Você não pode atualizar este usuário");
};

const deleteUserByIdService = async (userId, userIdLogged) => {
  const userWithPermission = await userRepositories.findByIdUserRepository(
    userIdLogged,
  );

  if (userId === userIdLogged || userWithPermission.fullPermission) {
    await userRepositories.transferPostsToAnotherUserRepository(
      userId,
      "6622fa42055d3d62264c8804", //trocar para ID conta MOD
    );
    const user = await userRepositories.deleteUserRepository(userId);

    if (!user) throw new Error("Usuário não encontrado");

    return { message: "Usuário deletado om sucesso!" };
  }

  return { message: "Você não pode deletar este usuário" };
};

const followUserService = async (username, userId, userIdUsername) => {
  const user = await userRepositories.findByUsernameRepository(username);
  const userUsernameLogged = await userRepositories.findByIdUserRepository(
    userId,
  );

  const [userFollow, userFollowed] = await Promise.all([
    userRepositories.followUserRepository(
      //User para seguir
      user._id,
      //User logado
      userId,
      userIdUsername,
    ),
    userRepositories.followedUserRepository(
      //User para seguir
      user._id,
      username,
      //User logado
      userId,
    ),
    userRepositories.userGetNotificationRepository(
      user._id,
      userId,
      "Começou a seguir você",
      userUsernameLogged.username,
    ),
  ]);

  if (
    userFollow.lastErrorObject.n === 0 &&
    userFollowed.lastErrorObject.n === 0
  ) {
    await Promise.all([
      userRepositories.deletefollowUserRepository(user._id, userId),
      userRepositories.deletefollowedUserRepository(user._id, userId),
    ]);
    return { message: "Follow successfully removed" };
  }

  return { message: "Follow done successfully" };
};

const totalPointsUserService = async (userIdParam, userIdLogged) => {
  const idParam = userIdParam ? userIdParam : userIdLogged;

  if (!idParam)
    throw new Error("Envie um id nos parâmetros para procurar o usuário");

  const user = await userRepositories.findByIdUserRepository(idParam);
  const userPosts = await postRepositories.findPostsByUserIdRepository(user);

  if (!user) throw new Error("Usuário não encontrado");

  let userPoints = 0;
  for (let i = 0; i < userPosts.length; i++) {
    userPoints += 10;
    const post = userPosts[i];
    const numLikes = post.likes.length;
    const numComments = post.comments.length;
    userPoints += numComments * 2 + numLikes;
  }

  userRepositories.pointCountUserRepository(user, userPoints);

  user.points = userPoints;

  return user.points.toString();
};

const userDeleteNotificationService = async (userId, id) => {
  await userRepositories.userDeleteNotificationRepository(userId, id);
  return { message: "Notification deleted" };
};

export default {
  createUserService,
  findAllUserService,
  findUserByUsernameService,
  findUserByIdService,
  updateUserService,
  deleteUserByIdService,
  followUserService,
  totalPointsUserService,
  userDeleteNotificationService,
};
