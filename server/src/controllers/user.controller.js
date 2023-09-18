import userService from '../services/user.service.js'

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
}

const findAllUserController = async (req, res) => {
  try {
    const users = await userService.findAllUserService();
    return res.send(users);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

const findUserByIdController = async (req, res) => {
  try {
    const user = await userService.findUserByIdService(
      req.params.id,
      req.userId
    );
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

const updateUserController = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userService.updateUserService(
      { name, username, email, password, avatar, background },
      userId,
      userIdLogged
    );

    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

const deleteUserByIdController = async (req, res) => {
  try {
    const userId = req.userId;

    const response = await userService.deleteUserByIdService(userId);

    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  };
};

const followUserController = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const idName = await userService.findUserByIdService(id);
  const userIdName = await userService.findUserByIdService(req.userId);

  try {
    const response = await userService.followUserService(id, idName.username, userId, userIdName.username);

    return res.send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

export default {
  createUserController,
  findAllUserController,
  findUserByIdController,
  updateUserController,
  deleteUserByIdController,
  followUserController,
};