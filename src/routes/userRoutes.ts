import { Router, Request, Response } from 'express';
import userController from '../controllers/UserController';
import { ensureAuthenticated } from '../middlewares/esureAuthenticated';

const router = Router();

router.post('/', userController.create);
router.get('/', ensureAuthenticated, userController.index);
router.get('/:id', ensureAuthenticated, userController.show);
router.put('/', ensureAuthenticated, userController.update);
router.delete('/', ensureAuthenticated, userController.delete);

export default router;
