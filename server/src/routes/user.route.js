import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middleware.js";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/create", userController.createUserController);

userRouter.use(authMiddleware);
userRouter.get("/", userController.findAllUserController);

userRouter.use(validId);
userRouter.get("/findById/:id?", userController.findUserByIdController);
userRouter.patch("/points/:id", userController.totalPointsUserController);
userRouter.patch("/update/:id", userController.updateUserController);
userRouter.patch(
  "/updatePassword/:id",
  userController.updateUserPasswordController,
);
userRouter.delete("/delete/:id", userController.deleteUserByIdController);
userRouter.get(
  "/findByUsername/:username",
  userController.findUserByUsernameController,
);
userRouter.patch("/follow/:username", userController.followUserController);
userRouter.patch(
  "/deleteNotification/:userId/:id",
  userController.userDeleteNotificationController,
);

export default userRouter;
