import postRepositories from "../repositories/post.repositories.js";
import userRepositories from "../repositories/user.repositories.js";
import userService from "./user.service.js";

const createPostService = async ({ title, banner, text }, userId) => {
  if (!title || !banner || !text)
    throw new Error("Submit all fields for registration");

  const { id } = await postRepositories.createPostRepository(
    title,
    banner,
    text,
    userId,
  );

  await userService.totalPointsUserService(userId);

  return {
    message: "Post created successfully!",
    post: { id, title, banner, text },
  };
};

const findAllPostsService = async (limit, offset, currentUrl) => {
  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 50;
  }

  if (!offset) {
    offset = 0;
  }

  const posts = await postRepositories.findAllPostsRepository(offset, limit);

  const total = await postRepositories.countPosts();

  const next = offset + limit;
  const nextUrl =
    next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  posts.shift();

  return {
    nextUrl,
    previousUrl,
    limit,
    offset,
    total,

    results: posts.map((post) => ({
      id: post._id,
      title: post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    })),
  };
};

const topPostsService = async () => {
  const post = await postRepositories.topPostsRepository();

  if (!post) throw new Error("There is no registered post");

  return {
    post: {
      id: post._id,
      title: post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    },
  };
};

const findPostByIdService = async (id) => {
  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post not found");

  return {
    id: post._id,
    title: post.title,
    banner: post.banner,
    text: post.text,
    likes: post.likes,
    comments: post.comments,
    postUserId: post.user._id,
    name: post.user.name,
    username: post.user.username,
    avatar: post.user.avatar,
  };
};

const searchPostService = async (title) => {
  const foundPosts = await postRepositories.searchPostRepository(title);

  if (foundPosts.length === 0)
    throw new Error("There are no posts with this title");

  return {
    foundPosts: foundPosts.map((post) => ({
      id: post._id,
      title: post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    })),
  };
};

const findPostsByUserUsernameService = async (username) => {
  const user = await userRepositories.findByUsernameRepository(username);
  const posts = await postRepositories.findPostsByUserIdRepository(user.id);

  return {
    postsByUser: posts.map((post) => ({
      id: post._id,
      title: post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    })),
  };
};

const updatePostService = async (id, title, banner, text, userId) => {
  if (!title && !banner && !text)
    throw new Error("Submit at least one field to update the post");

  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post not found");

  if (post.user._id != userId) throw new Error("You didn't create this post");

  await postRepositories.updatePostRepository(id, title, banner, text);
};

const deletePostService = async (id, userId, permission) => {
  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post não encontrado");

  if (post.user._id == userId || permission === true) {
    await postRepositories.deletePostRepository(id);
  } else {
    throw new Error("Você não criou esta post");
  }
};

const likePostService = async (id, userId) => {
  const postLiked = await postRepositories.likesRepository(id, userId);
  const { postUserId } = await findPostByIdService(id);

  if (postLiked.lastErrorObject.n === 0) {
    await postRepositories.likesDeleteRepository(id, userId);
    await userService.totalPointsUserService(postUserId);
    return { message: "Like successfully removed" };
  }

  await userService.totalPointsUserService(postUserId);
  return { message: "Like done successfully" };
};

const commentPostService = async (postId, message, userId) => {
  if (!message) throw new Error("Write a message to comment");

  const post = await postRepositories.findPostByIdRepository(postId);
  const { postUserId } = await findPostByIdService(postId);

  if (!post) throw new Error("Post not found");

  await postRepositories.commentsRepository(postId, message, userId);
  await userService.totalPointsUserService(postUserId);
};

const commentDeletePostService = async (postId, userId, idComment) => {
  const post = await postRepositories.findPostByIdRepository(postId);
  const { postUserId } = await findPostByIdService(postId);

  if (!post) throw new Error("Post not found");

  await postRepositories.commentsDeleteRepository(postId, userId, idComment);
  await userService.totalPointsUserService(postUserId);
};

export default {
  createPostService,
  findAllPostsService,
  topPostsService,
  searchPostService,
  findPostByIdService,
  findPostsByUserUsernameService,
  updatePostService,
  deletePostService,
  likePostService,
  commentPostService,
  commentDeletePostService,
};
