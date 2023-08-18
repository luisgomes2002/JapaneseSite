import dotenv from 'dotenv';
import userService from '../services/user.service.js';
import jwt from 'jsonwebtoken';

dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      res.sendStatus(401);
    };

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      res.sendStatus(401);
    };

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      res.sendStatus(401);
    };

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        res.status(401).send({ message: "Token invalid!" });
      }
      const user = await userService.findByIdService(decoded.id);

      if (!user || !user.id) {
        res.status(401).send({ message: "Invalid token!" });
      }

      req.userId = user._id;

      return next();
    });
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};