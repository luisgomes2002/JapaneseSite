import User from '../models/User.js'

const createRepository = (body) => User.create(body);

const findAllRepository = (offset, limit) => User.find().sort({ _id: 1 }).skip(offset).limit(limit); //fazer uma paginação

const findByIdRepository = (idUser) => User.findById(idUser);

const updateRepository = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

const deleteRepository = (id) => User.deleteOne({ _id: id });

const countRepository = () => User.countDocuments();

export default {
  createServiceRepository,
  findAllServiceRepository,
  findByIdServiceRepository,
  updateServiceRepository,
  deleteServiceRepository,
  countUsersRepository,
};