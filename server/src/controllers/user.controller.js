import userService from "../services/user.service.js";

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  try {
    const token = await userService.createUserService({
      name,
      username,
      email,
      password,
      avatar,
      background,
    });
    res.status(201).send(token);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const findAllUserController = async (req, res) => {
  try {
    const users = await userService.findAllUserService();
    return res.send(users);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

const findUserByUsernameController = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userService.findUserByUsernameService(username);
    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(
      req.params.id,
      req.userId,
    );
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userService.updateUserService(
      { name, username, email, password, avatar, background },
      userId,
      userIdLogged,
    );

    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const deleteUserByIdController = async (req, res) => {
  try {
    const userId = req.userId;

    const response = await userService.deleteUserByIdService(userId);

    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const followUserController = async (req, res) => {
  const { username } = req.params;
  const userId = req.userId;
  const userIdName = await userService.findUserByIdService(userId);
  const Userwhowillfollow = await userService.findUserByUsernameService(
    username,
  );

  try {
    const response = await userService.followUserService(
      //User para seguir
      username,
      Userwhowillfollow.avatar,
      Userwhowillfollow.background,
      //User logado
      userId,
      userIdName.username,
    );
    return res.send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const totalPointsUserController = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const user = await userService.totalPointsUserService(userId, userIdLogged);
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

export default {
  createUserController,
  findAllUserController,
  findUserByUsernameController,
  findUserByIdController,
  updateUserController,
  deleteUserByIdController,
  followUserController,
  totalPointsUserController,
};
