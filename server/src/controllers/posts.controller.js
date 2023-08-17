import { createService, findAllService } from '../services/posts.service.js'

const create = async (req, res) => {

  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration"
      });
    };

    await createService({
      title,
      text,
      banner,
      id: 'objectidfake1'
    });

  } catch (err) {
    res.status(500).send({ message: err.message })
  };
  res.send(201);
};

const findAll = (req, res) => {
  const posts = [];
  res.send(posts);
};

export default { create, findAll };