import User from '../models/User.js'

const createService = (body) => User.create(body);

const findAllService = (offset, limit) => User.find().sort({ _id: 1 }).skip(offset).limit(limit); //fazer uma paginação

const findByIdService = (idUser) => User.findById(idUser);

const updateService = (
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

const deleteService = (id) => User.deleteOne({ _id: id });

const countUsers = () => User.countDocuments();

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
  countUsers,
};