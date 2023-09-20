import Post from "../models/Posts.js";

const createPostRepository = (title, banner, text, userId) => {
  return Post.create({ title, banner, text, user: userId });
}

const findAllPostsRepository = (offset, limit) => {
  return Post.find().sort({ likes: -1 }).skip(offset).limit(limit).populate("user");
}

const topPostsRepository = () => {
  return Post.findOne().sort({ likes: -1 }).populate("user");
}

const findPostByIdRepository = (id) => {
  return Post.findById(id).populate("user");
}

const countPosts = () => {
  return Post.countDocuments();
}

const searchPostRepository = (title) => {
  return Post.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ likes: -1 })
    .populate("user");
}

const findPostsByUserIdRepository = (id) => {
  return Post.find({
    user: id,
  })
    .sort({ _id: -1 })
    .populate("user");
}

const updatePostRepository = (id, title, banner, text) => {
  return Post.findOneAndUpdate(
    {
      _id: id,
    },
    {
      title,
      banner,
      text,
    },
    {
      rawResult: true,
    }
  );
}

const deletePostRepository = (id) => {
  return Post.findOneAndDelete({ _id: id });
}

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
    }
  );
}

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
    }
  );
}

const commentsRepository = (id, message, userId) => {
  let idComment = Math.floor(Date.now() * Math.random()).toString(36);
  return Post.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $push: {
        comments: { idComment, userId, message, createdAt: new Date() },
      },
    },
    {
      rawResult: true,
    }
  );
}

const commentsDeleteRepository = (id, userId, idComment) => {
  return Post.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $pull: {
        comments: {
          idComment: idComment,
          userId: userId,
        },
      },
    }
  );
}

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
  commentsDeleteRepository,
  countPosts,
};