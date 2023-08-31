import Posts from '../models/Posts.js'

export const createService = (body) => Posts.create(body);

export const findAllService = (offset, limit) => Posts.find().sort({ likes: -1 }).skip(offset).limit(limit).populate("user");

export const countPosts = () => Posts.countDocuments();

export const topPostsService = () => Posts.findOne().sort({ likes: -1 }).populate("user");

export const findByIdService = (id) => Posts.findById(id).populate("user");

export const searchByTitleService = (title) => Posts.find({
  title: { $regex: `${title || ""}`, $options: "i" },
}).sort({ _id: -1 }).populate("user");

export const byUserService = (id) => Posts.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updateService = (id, title, text, banner) => Posts.findOneAndUpdate(
  { _id: id },
  { title, text, banner },
  { rawResult: true, }
);

export const eraseService = (id) => Posts.findOneAndDelete({ _id: id });

export const likePostService = (idPosts, userId) => Posts.findOneAndUpdate(
  { _id: idPosts, 'likes.userId': { $nin: [userId] } },
  { $push: { likes: { userId, created: new Date() } } }
);

export const deleteLikePostService = (idPosts, userId) => Posts.findOneAndUpdate(
  { _id: idPosts },
  { $pull: { likes: { userId } } }
);

export const addCommentService = (idPosts, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return Posts.findOneAndUpdate(
    { _id: idPosts },
    {
      $push: {
        comments: {
          idComment, userId, comment, createdAt: new Date()
        }
      }
    }
  );
};

export const deleteCommentService = (idPosts, idComment, userId) => Posts.findOneAndUpdate(
  { _id: idPosts },
  { $pull: { comments: { idComment, userId } } }
);