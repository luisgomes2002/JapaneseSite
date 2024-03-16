import Post from "../models/Posts.js";

const createPostRepository = (title, banner, text, tag, userId) => {
  return Post.create({ title, banner, text, tag, user: userId });
};

const findAllPostsRepository = (offset, limit) => {
  return Post.find()
    .sort({ likes: -1 })
    .skip(offset)
    .limit(limit)
    .populate("user");
};

const topPostsRepository = () => {
  return Post.findOne().sort({ likes: -1 }).populate("user");
};

const findPostByIdRepository = (id) => {
  return Post.findById(id).populate("user");
};

const countPosts = () => {
  return Post.countDocuments();
};

const searchPostRepository = (title) => {
  return Post.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ likes: -1 })
    .populate("user");
};

const findPostsByUserIdRepository = (id) => {
  return Post.find({
    user: id,
  })
    .sort({ likes: -1 })
    .populate("user");
};

const updatePostRepository = (id, title, banner, text, tag, links) => {
  return Post.findOneAndUpdate(
    {
      _id: id,
    },
    {
      title,
      banner,
      text,
      tag,
      links,
    },
    {
      rawResult: true,
    },
  );
};

const deletePostRepository = (id) => {
  return Post.findOneAndDelete({ _id: id });
};

const likesRepository = (id, userId) => {
  return Post.findOneAndUpdate(
    {
      _id: id,
      "likes.userId": { $nin: [userId] },
    },
    {
      $push: {
        likes: { userId, created: new Date() },
      },
    },
    {
      rawResult: true,
    },
  );
};

const likesDeleteRepository = (id, userId) => {
  return Post.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        likes: {
          userId: userId,
        },
      },
    },
  );
};

const commentsRepository = (
  postId,
  message,
  userIdUsername,
  userIdIcon,
  userId,
) => {
  return Post.findOneAndUpdate(
    {
      _id: postId,
    },
    {
      $push: {
        comments: {
          message: message,
          username: userIdUsername,
          icon: userIdIcon,
          userId: userId,
          createdAt: new Date(),
        },
      },
    },
    {
      rawResult: true,
    },
  );
};

const replyToCommentsRepository = (
  postId,
  parentId,
  message,
  userIdUsername,
  userIdIcon,
  userId,
) => {
  return Post.findOneAndUpdate(
    {
      _id: postId,
      "comments._id": parentId,
    },
    {
      $push: {
        "comments.$.replies": {
          message: message,
          username: userIdUsername,
          icon: userIdIcon,
          userId: userId,
          createdAt: new Date(),
        },
      },
    },
    {
      new: true,
      rawResult: true,
    },
  );
};

const commentsDeleteRepository = (postId, userId, idComment) => {
  return Post.findOneAndUpdate(
    {
      _id: postId,
    },
    {
      $pull: {
        comments: {
          idComment: idComment,
          userId: userId,
        },
      },
    },
    { new: true },
  );
};

export default {
  createPostRepository,
  findAllPostsRepository,
  topPostsRepository,
  findPostByIdRepository,
  searchPostRepository,
  findPostsByUserIdRepository,
  updatePostRepository,
  deletePostRepository,
  likesRepository,
  likesDeleteRepository,
  commentsRepository,
  replyToCommentsRepository,
  commentsDeleteRepository,
  countPosts,
};
