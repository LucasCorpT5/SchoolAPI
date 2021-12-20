import { Router, Request, Response } from 'express';
import userController from '../controllers/UserController';
import { ensureAuthenticated } from '../middlewares/esureAuthenticated';

const router = Router();

router.get('/', ensureAuthenticated, userController.show);
router.get('/logs', ensureAuthenticated, userController.index);
router.post('/', userController.create);
router.put('/', ensureAuthenticated, userController.update);
router.delete('/', ensureAuthenticated, userController.delete);

export default router;
