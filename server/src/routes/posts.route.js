import { Router } from "express";
const router = Router();

import { create, findAll } from '../controllers/posts.controller.js'

router.post('/', create);
router.ger('/', findAll);

export default router;