import {apiRouter} from "./api.route";
import {
    UserControllerInstance,
    CartControllerInstance,
    CommentsControllerInstance,
    StatusControllerInstance,
} from "../controllers/user.controller";
import {authenticateAdmin, authenticateToken} from "../middlewares/auth.middleware";
import express from "express";

export const userRouter = express.Router();

userRouter.get('/carts', CartControllerInstance.getAll);
userRouter.get('/carts/:id', CartControllerInstance.get);
userRouter.put('/carts/:id', authenticateToken, CartControllerInstance.update);
userRouter.delete('/carts/:id', authenticateAdmin, CartControllerInstance.delete);
userRouter.post('/carts', authenticateToken, CartControllerInstance.create);

userRouter.get('/comments', CommentsControllerInstance.getAll);
userRouter.get('/comments/:id', CommentsControllerInstance.get);
userRouter.put('/comments/:id', authenticateAdmin, CommentsControllerInstance.update);
userRouter.delete('/comments/:id', authenticateAdmin, CommentsControllerInstance.delete);
userRouter.post('/comments', authenticateToken, CommentsControllerInstance.create);

userRouter.get('/status', StatusControllerInstance.getAll);
userRouter.get('/status/:id', StatusControllerInstance.get);
userRouter.put('/status/:id', authenticateAdmin, StatusControllerInstance.update);
userRouter.delete('/status/:id', authenticateAdmin, StatusControllerInstance.delete);
userRouter.post('/status', authenticateToken, StatusControllerInstance.create);

userRouter.get('/', UserControllerInstance.getAll);
userRouter.get('/:id', UserControllerInstance.get);
userRouter.put('/:id', authenticateAdmin, UserControllerInstance.update);
userRouter.delete('/:id', authenticateAdmin, UserControllerInstance.delete);
userRouter.post('/', authenticateToken, UserControllerInstance.create);