import User from '../models/User.js'

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = (body) => User.create(body);

const findAllUserRepository = (offset, limit) => User.find().sort({ _id: 1 }).skip(offset).limit(limit); //fazer uma paginação

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = (id, name, username, email, password, avatar, background) => {
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background },
    { rawResult: true, }
  );
}

const deleteUserRepository = (idUser) => User.deleteOne({ _id: idUser });

const countRepository = () => User.countDocuments();

export default {
  findByEmailUserRepository,
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  updateUserRepository,
  deleteUserRepository,
  countRepository,
};