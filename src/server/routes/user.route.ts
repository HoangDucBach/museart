import {apiRouter} from "./api.route";
import {CartControllerInstance} from "../controllers/user.controller";
import {authenticateAdmin} from "../middlewares/auth.middleware";
import express from "express";

export const userRouter = express.Router();

userRouter.get('/carts', CartControllerInstance.getAll);
userRouter.get('/carts/:id', CartControllerInstance.get);
userRouter.put('/carts/:id', authenticateAdmin, CartControllerInstance.update);
userRouter.delete('/carts/:id', authenticateAdmin, CartControllerInstance.delete);
userRouter.post('/carts', CartControllerInstance.create);