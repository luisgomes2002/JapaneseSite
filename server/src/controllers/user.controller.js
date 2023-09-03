import userService from '../services/user.service.js'

const create = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" })
    };

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: 'Erro creating User' });
    }

    res.status(201).send({
      message: "User created sucessfully",
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

const findAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    };

    if (!offset) {
      offset = 0;
    };

    const users = await userService.findAllService(offset, limit);
    const total = await userService.countUsers();

    const currentUrl = req.baseUrl;

    const next = offset + limit;
    const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

    if (users.length === 0) {
      return res.status(400).send({ message: 'There are no registered users' })
    };

    res.send({
      nextUrl,
      previousUrl,
      limit,
      offset,
      total,
      users
    });
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one field for update" })
    };

    const { id, user } = req;

    await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    res.send({ message: 'User updated successfully !' });
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

const deleteById = async (req, res) => {
  try {
    const userId = req.id;
    await userService.deleteService(userId);

    res.send({ message: 'User deleted successfully!' });

  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

export default { create, findAll, findById, update, deleteById };