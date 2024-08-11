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
    //user retornando a senha TIRAR!!!
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
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
    const userUpdate = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userService.updateUserService(
      userUpdate,
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
    const { userAccountId } = req.body;
    const userIdLogged = req.userId;
    const response = await userService.deleteUserByIdService(
      userAccountId,
      userIdLogged,
    );

    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const followUserController = async (req, res) => {
  const { username } = req.params;
  const userId = req.userId;
  const userIdName = await userService.findUserByIdService(userId);

  try {
    const response = await userService.followUserService(
      //User para seguir
      username,
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

const userDeleteNotificationController = async (req, res) => {
  const { userId, id } = req.params;
  try {
    const response = await userService.userDeleteNotificationService(
      userId,
      id,
    );

    return res.send(response);
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
  userDeleteNotificationController,
};
