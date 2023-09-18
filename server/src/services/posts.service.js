import postRepositories from "../repositories/post.repositories.js";

const createPostService = async ({ title, banner, text }, userId) => {
  if (!title || !banner || !text)
    throw new Error("Submit all fields for registration");

  const { id } = await postRepositories.createPostRepository(
    title,
    banner,
    text,
    userId
  );

  return {
    message: "Post created successfully!",
    post: { id, title, banner, text },
  };
}

const findAllPostsService = async (limit, offset, currentUrl) => {
  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 7;
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
}

//const countPosts = () => Posts.countDocuments();

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
}

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
    name: post.user.name,
    username: post.user.username,
    avatar: post.user.avatar,
  };
}

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
}

const findPostsByUserIdService = async (id) => {
  const posts = await postRepositories.findPostsByUserIdRepository(id);

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
}

const updatePostService = async (id, title, banner, text, userId) => {
  if (!title && !banner && !text)
    throw new Error("Submit at least one field to update the post");

  const post = await postRepositories.findPostByIdRepository(id);

  if (!post) throw new Error("Post not found");

  if (post.user._id != userId) throw new Error("You didn't create this post");

  await postRepositories.updatePostRepository(id, title, banner, text);
}

const deletePostService = async (id, userId) => {
  const post = await postService.findPostByIdService(id);

  if (!post) throw new Error("Post not found");

  if (post.user._id != userId) throw new Error("You didn't create this post");

  await postRepositories.deletePostRepository(id);
}

const likePostService = async (id, userId) => {
  const postLiked = await postRepositories.likesRepository(id, userId);

  if (postLiked.lastErrorObject.n === 0) {
    await postRepositories.likesDeleteRepository(id, userId);
    return { message: "Like successfully removed" };
  }

  return { message: "Like done successfully" };
}

const commentPostService = async (postId, message, userId) => {
  if (!message) throw new Error("Write a message to comment");

  const post = await postRepositories.findPostByIdRepository(postId);

  if (!post) throw new Error("Post not found");

  await postRepositories.commentsRepository(postId, message, userId);
}

const commentDeletePostService = async (postId, userId, idComment) => {
  const post = await postRepositories.findPostByIdRepository(postId);

  if (!post) throw new Error("Post not found");

  await postRepositories.commentsDeleteRepository(postId, userId, idComment);
}

export default {
  createPostService,
  findAllPostsService,
  topPostsService,
  searchPostService,
  findPostByIdService,
  findPostsByUserIdService,
  updatePostService,
  deletePostService,
  likePostService,
  commentPostService,
  commentDeletePostService,
};