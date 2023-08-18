import { createService, findAllService } from '../services/posts.service.js'

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    };

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send({ message: err.message })
  };
};

const findAll = async (req, res) => {
  const posts = await findAllService();

  if (posts.length === 0) {
    return res.status(400).send({ message: 'There are no registered posts' })
  };

  res.send(posts);
};

export { create, findAll };