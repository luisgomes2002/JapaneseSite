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

router.post('/create', authMiddleware, create);
router.get('/', findAll);
router.get('/top', topPosts);
router.get('/search', searchByTitle);
router.get('/byUserId', authMiddleware, byUser);
router.get('/byIdPost/:id', authMiddleware, findById);
router.patch('/upadate/:id', authMiddleware, update);
router.delete('/delete/:id', authMiddleware, erase);
router.patch('/:id/like', authMiddleware, likePost);
router.patch('/:id/comment', authMiddleware, addComment);
router.patch("/:id/:idComment/comment", authMiddleware, deleteComment);

export default router;