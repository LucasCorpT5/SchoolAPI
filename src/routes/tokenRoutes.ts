import { Router, Request, Response } from 'express';
import tokenController from '../controllers/TokenController';

const router = Router();

router.post('/', tokenController.create);

export default router;
