import mongoose from "mongoose";
import userRepositories from "../repositories/user.repositories.js";

export async function validId(req, res, next) {
  let idParam;
  if (!req.params.id) {
    req.params.id = req.userId;
    idParam = req.params.id;
  } else {
    idParam = req.params.id;
  }

  const userFullPermission = await userRepositories.findByIdUserRepository(idParam);

  if (!mongoose.Types.ObjectId.isValid(idParam) ||  userFullPermission.fullPermission !== true) {
    return res.status(400).send({ message: "ID Inválido ou Sem permissão!" });
  }
  next();
}
