import "dotenv/config";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).send({ message: "O token não foi informado!" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2)
    return res.status(401).send({ message: "Token inválido!" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ message: "Token malformatado!" });

  jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Token inválido!" });

    const user = await userRepositories.findByIdUserRepository(decoded.id);
    if (!user || !user.id)
      return res.status(401).send({ message: "Token inválido!" });

    req.userId = user.id;

    return next();
  });
};

export default authMiddleware;
