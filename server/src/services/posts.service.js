import Posts from '../models/Posts.js'

const createService = (body) => Posts.create(body);

const findAllService = (offset, limit) => Posts.find().sort({ likes: -1 }).skip(offset).limit(limit).populate("user");

const countPosts = () => Posts.countDocuments();

const topPostsService = () => Posts.findOne().sort({ likes: -1 }).populate("user");

export {
  createService,
  findAllService,
  countPosts,
  topPostsService,
}