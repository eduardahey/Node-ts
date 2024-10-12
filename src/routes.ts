import {Router, Request, Response} from 'express';
import { UserController } from '../src/controllers/UserController';

export const router = Router();

const userController = new UserController();

// Rota para criar um usuário
router.post('/user', (req: Request, res: Response) => {
    userController.createUser(req, res);
});

router.get('/user', (req: Request, res: Response) => {
    userController.getAllUsers(req, res);
});

router.delete('/user', (req: Request, res: Response) => {
    const user = req.body
    console.log(user)
    userController.deleteUser(req, res);
});

