import { Router } from "express";
const router = Router();

import { create, findAll, topPosts } from '../controllers/posts.controller.js';
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post('/', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topPosts);

export default router;