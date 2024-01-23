import mongoose from "mongoose";

export async function validId(req, res, next) {
  let idParam;
  if (!req.params.id) {
    req.params.id = req.userId;
    idParam = req.params.id;
  } else {
    idParam = req.params.id;
  }

  const isInvalidId = !mongoose.Types.ObjectId.isValid(idParam);

  if (isInvalidId) {
    return res.status(400).send({ message: "ID Inválido!" });
  }
  next();
}
