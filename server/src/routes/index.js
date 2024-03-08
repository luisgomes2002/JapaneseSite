import { Router } from "express";
import userRouter from "./user.route.js";
import postRouter from "./posts.route.js";
import authRouter from "./auth.route.js";
import swaggerRouter from "./swagger.route.cjs";
import cardsRouter from "./cards.route.js";

const router = Router();

router.use("/user", userRouter);
router.use("/posts", postRouter);
router.use("/auth", authRouter);
router.use("/doc", swaggerRouter);
router.use("/cards", cardsRouter);

export default router;
