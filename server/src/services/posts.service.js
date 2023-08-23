import Posts from '../models/Posts.js'

const createService = (body) => Posts.create(body);

const findAllService = (offset, limit) => Posts.find().sort({_id: -1}).skip(offset).limit(limit).populate("user");

const countPosts = () => Posts.countDocuments();

export {
  createService,
  findAllService,
  countPosts,
}