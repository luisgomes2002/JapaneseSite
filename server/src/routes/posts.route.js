import { Router } from "express";
const router = Router();

import {
  create,
  findAll,
  topPosts,
  findById,
  searchByTitle,
  byUser,
  update,
  erase,
  likePost,
  addComment,
  deleteComment,
} from '../controllers/posts.controller.js';

import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post('/', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topPosts);
router.get('/search', searchByTitle);
router.get('/byUser', authMiddleware, byUser);
router.get('/:id', authMiddleware, findById);
router.patch('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, erase);
router.patch('/like/:id', authMiddleware, likePost);
router.patch('/comment/:id', authMiddleware, addComment);
router.patch('/comment/:idPosts/:idComment', authMiddleware, deleteComment);

export default router;