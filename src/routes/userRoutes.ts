import { Router, Request, Response } from 'express';
import userController from '../controllers/UserController';

const router = Router();

router.post('/', userController.create);

export default router;
