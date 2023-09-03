import Router from 'express';
import userController from '../controllers/user.controller.js';
import { validId, validUser } from '../middlewares/global.middleware.js';

const router = Router();

router.post('/create', userController.create);
router.get('/', userController.findAll);
router.get('/findById/:id', validId, validUser, userController.findById);
router.patch('/update/:id', validId, validUser, userController.update);
router.delete('/delete/:id', validId, validUser, userController.deleteById);

export default router;