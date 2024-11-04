import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";
import authRepositories from "../repositories/auth.repositories.js";

const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 432000 });
};

const loginService = async ({ email, password }) => {
  const user = await authRepositories.loginRepository(email);

  if (!user) throw new Error("Senha ou nome de usuário errados");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Senha ou nome de usuário errados");

  const token = generateToken(user.id);

  return token;
};

export default { loginService, generateToken };
