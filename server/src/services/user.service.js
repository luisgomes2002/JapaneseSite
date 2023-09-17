import userRepositories from "../repositories/user.repositories.js";
import authService from "../services/auth.service.js"
import bcrypt from 'bcrypt';

const createUserService = async ({ name, username, email, password, avatar, background }) => {
  if (!name || !username || !email || !password || !avatar || !background) throw new Erro("Envie todos os campos para cadastro");

  const newUser = { name, username, email, password, avatar, background }

  const foundUser = await userRepositories.findByEmailUserRepository(email);

  if (foundUser) throw new Erro("Usuário já existe");

  const user = await userRepositories.createUserRepository(newUser);

  if (!user) throw new Erro("Erro ao criar usuário");

  const token = authService.generateToken(user.id);

  return {
    message: "User created sucessfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
    token,
  };
};

const findAllUserService = async () => {
  const users = await userRepositories.findAllUserRepository();

  if (users.length === 0) throw new Erro("Não há usuários cadastrados");

  return users;
};

const findUserByIdService = async (userIdParam, userIdLogged) => {
  let idParam;

  if (!userIdParam) {
    userIdParam = userIdLogged;
    idParam = userIdParam;
  } else {
    idParam = userIdParam;
  }

  if (!idParam) throw new Error("Envie um id nos parâmetros para procurar o usuário");

  const user = await userRepositories.findByIdUserRepository(idParam);

  if (!user) throw new Error("Usuário não encontrado");

  return user;
};

const updateUserService = async ({ name, username, email, password, avatar, background }, userId, userIdLogged) => {

  if (!name && !username && !email && !password && !avatar && !background) throw new Error("Envie pelo menos um campo para atualizar o usuário");

  const user = await userRepositories.findByIdUserRepository(userId);

  if (user._id != userIdLogged) throw new Error("Você não pode atualizar este usuário");

  if (password) password = await bcrypt.hash(password, 10);

  await userRepositories.updateUserRepository(
    userId,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  return { message: "Usuário atualizado com sucesso!" };
}

const deleteUserByIdService = async (userIdParam, userIdLogged) => {
  let idParam;

  if (!userIdParam) {
    userIdParam = userIdLogged;
    idParam = userIdParam;
  } else {
    idParam = userIdParam;
  }

  await userRepositories.deleteUserRepository(idParam);

  return { message: "Usuário deletado om sucesso!" };
};

export default { createUserService, findAllUserService, findUserByIdService, updateUserService, deleteUserByIdService };