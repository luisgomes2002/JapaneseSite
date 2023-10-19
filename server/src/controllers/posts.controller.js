import postService from "../services/posts.service.js";
import userRepositories from "../repositories/user.repositories.js";

const createPostController = async(req, res) => {
  const { title, banner, text } = req.body;
  const userId = req.userId;

  try {
    const post = await postService.createPostService(
      { title, banner, text },
      userId
    );
    return res.status(201).send(post);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const findAllPostsController = async(req, res) => {
  const { limit, offset } = req.query;
  const currentUrl = req.baseUrl;

  try {
    const posts = await postService.findAllPostsService(
      limit,
      offset,
      currentUrl
    );
    return res.send(posts);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const topPostsController = async(req, res) => {
  try {
    const post = await postService.topPostsService();
    return res.send(post);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

 const findPostByIdController = async(req, res) => {
  const { id } = req.params;

  try {
    const post = await postService.findPostByIdService(id);
    return res.send(post);
  } catch (e) {
    res.status(404).send(e.message);
  }
}

const searchPostController = async(req, res) => {
  const { title } = req.query;

  try {
    const foundPosts = await postService.searchPostService(title);

    return res.send(foundPosts);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const findPostsByUserIdController = async(req, res) => {
  const id = req.userId;
  try {
    const posts = await postService.findPostsByUserIdService(id);
    return res.send(posts);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

const updatePostController = async(req, res) => {
  const { title, banner, text } = req.body;
  const { id } = req.params;
  const userId = req.userId;

  try {
    await postService.updatePostService(id, title, banner, text, userId);

    return res.send({ message: "Post successfully updated!" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

const deletePostController = async(req, res) =>  {
  const { id } = req.params;
  const userId = req.userId;
  const userFullPermission = await userRepositories.findByIdUserRepository(userId);
  const permission = userFullPermission.fullPermission;
  
  try {
    await postService.deletePostService(id, userId, permission);
    return res.send({ message: "Post deleted successfully" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

const likePostController = async(req, res)  => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const response = await postService.likePostService(id, userId);

    return res.send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

 const commentPostController = async(req, res) => {
  const { id: postId } = req.params;
  const { message } = req.body;
  const userId = req.userId;

  try {
    await postService.commentPostService(postId, message, userId);

    return res.send({
      message: "Comment successfully completed!",
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

const commentDeletePostController = async(req, res) => {
  const { id: postId, idComment } = req.params;
  const userId = req.userId;

  try {
    await postService.commentDeletePostService(postId, userId, idComment);

    return res.send({ message: "Comment successfully removed" });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export default {
  createPostController,
  findAllPostsController,
  topPostsController,
  searchPostController,
  findPostByIdController,
  findPostsByUserIdController,
  updatePostController,
  deletePostController,
  likePostController,
  commentPostController,
  commentDeletePostController,
};