import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middleware.js";
import { Router } from "express";
import userRepositories from "../repositories/user.repositories.js";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);

userRouter.use(authMiddleware);
userRouter.get("/", userController.findAllUserController);

userRouter.use(validId);
userRouter.get("/findById/:id?", userController.findUserByIdController);
userRouter.patch("/points/:id", userController.totalPointsUserController);
userRouter.patch("/update/:id", userController.updateUserController);
userRouter.delete("/delete/:id", userController.deleteUserByIdController);
userRouter.get(
  "/findByUsername/:username",
  userController.findUserByUsernameController,
);
userRouter.patch("/follow/:username", userController.followUserController);

export default userRouter;
