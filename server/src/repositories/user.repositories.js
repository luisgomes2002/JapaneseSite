import User from "../models/User.js";
import Post from "../models/Posts.js";

const findByEmailUserRepository = (email) => User.findOne({ email: email });

const findByUsernameRepository = (username) =>
  User.findOne({ username: username });

const createUserRepository = (body) => User.create(body);

const findAllUserRepository = (offset, limit) =>
  User.find().sort({ _id: 1 }).skip(offset).limit(limit); //fazer uma paginação

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = async (
  id,
  name,
  username,
  email,
  avatar,
  background,
) => {
  const result = await User.findOneAndUpdate(
    { _id: id },
    { name, username, email, avatar, background },
    { new: true, rawResult: true },
  );
  return result;
};

const updateUserPasswordRepository = async (id, password) => {
  const result = await User.findOneAndUpdate(
    { _id: id },
    { password },
    { new: true, rawResult: true },
  );
  return result;
};

const deleteUserRepository = (idUser) => User.deleteOne({ _id: idUser });

const countRepository = () => User.countDocuments();

const followUserRepository = (id, userId, userIdName) => {
  return User.findOneAndUpdate(
    {
      _id: id,
      "follows.userId": { $nin: [userId] },
    },
    {
      $push: {
        follows: { userId, userIdName, created: new Date() },
      },
    },
    {
      rawResult: true,
    },
  );
};

const deletefollowUserRepository = (id, userId) => {
  return User.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        follows: { userId: userId },
      },
    },
  );
};

const followedUserRepository = (id, idName, userId) => {
  return User.findOneAndUpdate(
    {
      _id: userId,
      "followed.id": { $nin: [id] },
    },
    {
      $push: {
        followed: { id, idName },
      },
    },
    {
      rawResult: true,
    },
  );
};

const deletefollowedUserRepository = (id, userId) => {
  return User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $pull: {
        followed: { id: id },
      },
    },
  );
};

const pointCountUserRepository = (id, points) => {
  User.findOneAndUpdate({ _id: id }, { points }, { rawResult: true }).exec();
};

const transferPostsToAnotherUserRepository = async (
  sourceUserId,
  destinationUserId,
) => {
  const postsToTransfer = await Post.find({ user: sourceUserId });
  await Promise.all(
    postsToTransfer.map(async (post) => {
      await Post.findOneAndUpdate(
        { _id: post._id },
        { user: destinationUserId },
      );
    }),
  );
};

const userGetNotificationRepository = (userId, id, title, username) => {
  const notificationIdCreated = Math.random().toString(36).substring(2);
  return User.findOneAndUpdate(
    {
      _id: userId,
      // "notification.id": { $nin: [id] },
    },
    {
      $push: {
        notification: {
          id,
          title,
          username,
          notificationIdCreated,
          createdAt: new Date(),
        },
      },
    },
    {
      rawResult: true,
    },
  );
};

const userDeleteNotificationRepository = (userId, id) => {
  return User.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      $pull: {
        notification: { notificationIdCreated: id },
      },
    },
  );
};

export default {
  findByEmailUserRepository,
  findByUsernameRepository,
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  updateUserRepository,
  updateUserPasswordRepository,
  deleteUserRepository,
  countRepository,
  followUserRepository,
  deletefollowUserRepository,
  followedUserRepository,
  deletefollowedUserRepository,
  pointCountUserRepository,
  transferPostsToAnotherUserRepository,
  userGetNotificationRepository,
  userDeleteNotificationRepository,
};
