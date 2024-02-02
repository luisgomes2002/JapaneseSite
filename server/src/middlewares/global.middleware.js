import mongoose from "mongoose";

export async function validId(req, res, next) {
  const idParam = req.params.id ? req.params.id : req.userId;

  const isInvalidId = !mongoose.Types.ObjectId.isValid(idParam);

  if (isInvalidId) {
    return res.status(400).send({ message: "ID Inválido!" });
  }
  next();
}
