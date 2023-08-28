import { Router } from "express";
const router = Router();

import { create, findAll, topPosts, findById, searchByTitle, byUser, update } from '../controllers/posts.controller.js';
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post('/', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topPosts);
router.get('/search', searchByTitle);
router.get('/byUser', authMiddleware, byUser);
router.get('/:id', authMiddleware, findById);
router.patch('/:id', authMiddleware, update);

export default router;