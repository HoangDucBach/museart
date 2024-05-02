import {apiRouter} from "./api.route";
import {
    CartControllerInstance,
    CommentsControllerInstance,
    StatusControllerInstance
} from "../controllers/user.controller";
import {authenticateAdmin} from "../middlewares/auth.middleware";
import express from "express";

export const userRouter = express.Router();

userRouter.get('/carts', CartControllerInstance.getAll);
userRouter.get('/carts/:id', CartControllerInstance.get);
userRouter.put('/carts/:id', authenticateAdmin, CartControllerInstance.update);
userRouter.delete('/carts/:id', authenticateAdmin, CartControllerInstance.delete);
userRouter.post('/carts', CartControllerInstance.create);

userRouter.get('/comments', CommentsControllerInstance.getAll);
userRouter.get('/comments/:id', CommentsControllerInstance.get);
userRouter.put('/comments/:id', authenticateAdmin, CommentsControllerInstance.update);
userRouter.delete('/comments/:id', authenticateAdmin, CommentsControllerInstance.delete);
userRouter.post('/comments', CommentsControllerInstance.create);

userRouter.get('/status', StatusControllerInstance.getAll);
userRouter.get('/status/:id', StatusControllerInstance.get);
userRouter.put('/status/:id', authenticateAdmin, StatusControllerInstance.update);
userRouter.delete('/status/:id', authenticateAdmin, StatusControllerInstance.delete);
userRouter.post('/status', StatusControllerInstance.create);
