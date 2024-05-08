import postRepositories from "../repositories/post.repositories.js";
import userRepositories from "../repositories/user.repositories.js";
import userService from "./user.service.js";

const createPostService = async (
  { title, banner, text, tags, links },
  userId,
) => {
  if (!title || !banner || !text || !tags)
    throw new Error("Submit all fields for registration");

  const { id } = await postRepositories.createPostRepository(
    title,
    banner,
    text,
    tags,
    links,
    userId,
  );

  const createPostUser = await userService.findUserByIdService(null, userId);
  await createNotificationService(
    createPostUser.follows,
    id,
    "Criou um novo Post",
    createPostUser.username,
  );

  return {
    message: "Post created successfully!",
    post: { id, title, banner, text, tags, links },
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
      tags: post.tags,
      date: post.createdAt,
      links: post.links,
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
      tags: post.tags,
      date: post.createdAt,
      links: post.links,
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
    tags: post.tags,
    date: post.createdAt,
    links: post.links,
    name: post.user.name,
    username: post.user.username,
    avatar: post.user.avatar,
    postUserId: post.user._id,
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
      tags: post.tags,
      date: post.createdAt,
      links: post.links,
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
      tags: post.tags,
      date: post.createdAt,
      links: post.links,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    })),
  };
};

const updatePostService = async (
  id,
  title,
  banner,
  text,
  tags,
  links,
  userId,
) => {
  if (!title && !banner && !text && !tags)
    throw new Error("Submit at least one field to update the post");

  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post not found");

  if (post.user._id != userId) throw new Error("You didn't create this post");

  await postRepositories.updatePostRepository(
    id,
    title,
    banner,
    text,
    tags,
    links,
  );
};

const deletePostService = async (id, userId, permission) => {
  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post não encontrado");

  if (post.user._id == userId || permission === true) {
    await postRepositories.deletePostRepository(id);
    await userService.totalPointsUserService(userId);
  } else {
    throw new Error("Você não criou esta post");
  }
};

const likePostService = async (postId, userId) => {
  const postLiked = await postRepositories.likesRepository(postId, userId);
  const { postUserId } = await findPostByIdService(postId);

  if (postLiked.lastErrorObject.n === 0) {
    await postRepositories.likesDeleteRepository(postId, userId);
    await userService.totalPointsUserService(postUserId);
    return { message: "Like successfully removed" };
  }

  await userService.totalPointsUserService(postUserId);
  return { message: "Like done successfully" };
};

const commentPostService = async (
  postId,
  message,
  userIdUsername,
  userIdIcon,
  userId,
) => {
  if (!message) throw new Error("Write a message to comment");

  const post = await postRepositories.findPostByIdRepository(postId);
  const { username } = await findPostByIdService(postId);
  const postUserId = await userService.findUserByUsernameService(username);

  if (!post) throw new Error("Post not found");

  await postRepositories.commentsRepository(
    postId,
    message,
    userIdUsername,
    userIdIcon,
    userId,
  );
  await userRepositories.userGetNotificationRepository(
    post.user._id,
    userId,
    "Comentou no seu post",
    userIdUsername,
  );
  await userService.totalPointsUserService(postUserId);
};

const replyToCommentService = async (
  postId,
  parentId,
  message,
  userIdUsername,
  userIdIcon,
  userId,
) => {
  await commentPostService(
    postId,
    message,
    userIdUsername,
    userIdIcon,
    userId,
    parentId,
  );
};

const commentDeletePostService = async (postId, userId, idComment) => {
  const post = await postRepositories.findPostByIdRepository(postId);
  if (!post) throw new Error("Post not found");

  const postUserId = post.user;

  const user = await userService.findUserByIdService(userId);
  if (!user) throw new Error("User not found");

  let commentCreator = post.comments.some(
    (comment) => comment.idComment == idComment && comment.userId == userId,
  );

  const isPostOwner = postUserId === userId;
  const isAdmin = user.fullPermission;

  if (isAdmin || isPostOwner || commentCreator) {
    await postRepositories.commentsDeleteRepository(postId, userId, idComment);
    await userService.totalPointsUserService(postUserId);
    return { message: "Comentário deletado" };
  } else {
    return { message: "Comentário não deletado - Permissão negada" };
  }
};

//chamada ao criar um post, curtir e comentar
const createNotificationService = async (
  userFollows,
  id,
  title,
  userUsername,
) => {
  for (let i = 0; i < userFollows.length; i++) {
    await userRepositories.userGetNotificationRepository(
      userFollows[i].userId,
      id, //user
      title, //message
      userUsername,
    );
  }
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
  replyToCommentService,
  commentDeletePostService,
};
