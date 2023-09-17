import userRepositories from "../repositories/user.repositories.js";
import authService from "../services/auth.service.js"
import bcrypt from 'bcrypt';

const createUserService = async ({ name, username, email, password, avatar, background }) => {
  if (!username || !name || !email || !password || !avatar || !background) throw new Error("Envie todos os campos para cadastro");

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

  /*await*/ userRepositories.updateUserRepository(
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

const deleteUserByIdService = async (userId) => {
  const user = await userRepositories.deleteUserRepository(userId);

  if (!user) throw new Error("Usuário não encontrado");

  return { message: "Usuário deletado om sucesso!" };
};

const followUserService = async (userIdParam, userIdLogged, name) => {

}

export default {
  createUserService,
  findAllUserService,
  findUserByIdService,
  updateUserService,
  deleteUserByIdService
};