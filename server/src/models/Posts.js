import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  icon: {
    type: String,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CommentSchema.add({
  replies: [CommentSchema],
});

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    required: true,
  },
  comments: [CommentSchema],
  tag: {
    type: Array,
    default: [],
    required: true,
  },
  links: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
