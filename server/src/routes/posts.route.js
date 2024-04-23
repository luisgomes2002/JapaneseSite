import postController from "../controllers/posts.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middleware.js";

import { Router } from "express";

const postRouter = Router();

postRouter.get("/", postController.findAllPostsController);
postRouter.get("/top", postController.topPostsController);
postRouter.get("/search", postController.searchPostController);

postRouter.use(authMiddleware);
postRouter.post("/create", postController.createPostController);
postRouter.get("/byIdPost/:id", postController.findPostByIdController);
postRouter.get(
  "/byUserUsername/:username",
  postController.findPostsByUserUsernameController,
);

postRouter.use(validId);
postRouter.patch("/update/:id", postController.updatePostController);
postRouter.delete("/delete/:id", postController.deletePostController);
postRouter.patch("/:id/like", postController.likePostController);
postRouter.patch("/:id/comment", postController.commentPostController);
postRouter.patch(
  "/:id/:idComment/comment",
  postController.commentDeletePostController,
);

export default postRouter;
