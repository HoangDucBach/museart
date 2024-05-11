import {NextFunction, Request, Response} from 'express';
import {Cart, Status, User} from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {config} from "dotenv-flow";
import {IBaseController} from "./base.controller";
import {ParamsDictionary} from 'express-serve-static-core';
import {ParsedQs} from 'qs';
import {Comment} from "../models/user.model";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export class UserController implements IBaseController {
    async get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.id;
            User.findByPk(userId).then(user => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({message: 'User not found'});
                }
            });
        } catch (error) {
            res.status(500).json({error: 'Error getting user'});
        }
    }

    async getAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        try {
            User.findAll().then(users => {
                res.status(200).json(users);
            });
        } catch (error) {
            res.status(500).json({error: 'Error getting users'});
        }
    }

    async create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        try {
            const {username, email, password, role} = req.body;
            User.create({
                username,
                email,
                password,
                role,
                createdAt: new Date(),
                updatedAt: new Date()
            }).then(newUser => {
                res.status(201).json(newUser);
            });
        } catch (error) {
            res.status(500).json({error: 'Error creating user'});
        }
    }

    async update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.id;
            const {username, email, password, role} = req.body;
            User.findByPk(userId).then(user => {
                if (user) {
                    user.update({username, email, password, role}).then(() => {
                        res.status(200).json({message: 'User updated successfully'});
                    });
                } else {
                    res.status(404).json({message: 'User not found'});
                }
            });
        } catch (error) {
            res.status(500).json({error: 'Error updating user'});
        }
    }

    async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        try {
            const userId = req.params.id;
            User.findByPk(userId).then(user => {
                if (user) {
                    user.destroy().then(() => {
                        res.status(200).json({message: 'User deleted successfully'});
                    });
                } else {
                    res.status(404).json({message: 'User not found'});
                }
            });
        } catch (error) {
            res.status(500).json({error: 'Error deleting user'});
        }
    }

    async signUp(req: Request, res: Response) {
        try {
            const {username, email, password, role} = req.body;
            const existingUser = await User.findOne({
                where: {email},
            });
            if (existingUser) {
                return res.status(400).json({message: 'User already exists'});
            }
            // const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                username,
                email,
                password,
                role,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            const token = jwt.sign({
                email: newUser.email,
            }, process.env.SECRET_KEY as string, {expiresIn: '1h'});
            res.status(201).json({"user": {
                "id": newUser.id,
                "name": newUser.username,
                "email": newUser.email,
                "password": newUser.password,
                "role": newUser.role
            }, "token": token});
        } catch (error) {
            res.status(500).json({error: 'Error signing up', message: error});
        }
    }

    async signIn(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            if (password !== user.password) {
                return res.status(401).json({message: 'Invalid password'});
            }
            const token = jwt.sign({
                id: user.id,
                email: user.email,
            }, process.env.SECRET_KEY as string, {expiresIn: '1h'});
            res.json({"user": {
                "id": user.id,
                "name": user.username,
                "email": user.email,
                "password": user.password,
                "role": user.role
            },
            "token": token});
        } catch (error) {
            res.status(500).json({error: 'Error signing in', message: error});
            console.log(error);
        }
    }
}

export class CartController implements IBaseController {
    async get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                res.status(200).json(cart);
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async getAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        Cart.findAll().then(carts => {
            res.status(200).json(carts);
        });
    }

    async create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const {userId, productIds, total, address, payMethod} = req.body;
        try {
            const newCart = await Cart.create({
                userId,
                productIds,
                total,
                address,
                payMethod,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            res.status(201).json(newCart);
        } catch (error) {
            res.status(500).json({error: 'Error creating cart'});
        }
    }

    async update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        const {userId, productIds, total, address, payMethod} = req.body;
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.update({userId, productIds, total, address, payMethod}).then(() => {
                    res.status(200).json({message: 'Cart updated successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.destroy().then(() => {
                    res.status(200).json({message: 'Cart deleted successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async addProduct(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        const productId = req.body.productId
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.productIds.push(productId);
                cart.update({productIds: cart.productIds}).then(() => {
                    res.status(200).json({message: 'Product added to cart successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async removeProduct(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        const productId = req.body.productId
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.productIds = cart.productIds.filter((id: string) => id !== productId);
                cart.update({productIds: cart.productIds}).then(() => {
                    res.status(200).json({message: 'Product removed from cart successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async increaseProductQuantity(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        const productId = req.body.productId
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.productIds.push(productId);
                cart.update({productIds: cart.productIds}).then(() => {
                    res.status(200).json({message: 'Product quantity increased successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }

    async decreaseProductQuantity(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const cartId = req.params.id;
        const productId = req.body.productId
        Cart.findByPk(cartId).then(cart => {
            if (cart) {
                cart.productIds.push(productId);
                cart.update({productIds: cart.productIds}).then(() => {
                    res.status(200).json({message: 'Product quantity decreased successfully'});
                });
            } else {
                res.status(404).json({message: 'Cart not found'});
            }
        });
    }


}

export class CommentsController implements IBaseController {
    async get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const commentId = req.params.id;
        Comment.findByPk(commentId).then(comment => {
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({message: 'Comment not found'});
            }
        });
    }

    async getAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        Comment.findAll().then(comments => {
            res.status(200).json(comments);
        });
    }

    async create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const {id, userId, comment} = req.body;
        try {
            const newComment = await Comment.create({
                id,
                userId,
                comment,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({error: 'Error creating comment'});
        }
    }

    async update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const commentId = req.params.id;
        const {id, userId, comment} = req.body;
        Comment.findByPk(commentId).then(cmt => {
            if (cmt) {
                cmt.update({id, userId, comment}).then(() => {
                    res.status(200).json({message: 'Comment updated successfully'});
                });
            } else {
                res.status(404).json({message: 'Comment not found'});
            }
        });
    }

    async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const commentId = req.params.id;
        Comment.findByPk(commentId).then(comment => {
            if (comment) {
                comment.destroy().then(() => {
                    res.status(200).json({message: 'Comment deleted successfully'});
                });
            } else {
                res.status(404).json({message: 'Comment not found'});
            }
        });
    }

}

export class StatusController implements IBaseController {
    async get(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const statusId = req.params.id;
        Status.findByPk(statusId).then(status => {
            if (status) {
                res.status(200).json(status);
            } else {
                res.status(404).json({message: 'Status not found'});
            }
        });
    }

    async getAll(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        Status.findAll().then(status => {
            res.status(200).json(status);
        });
    }

    async create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const {id, type, numberOfLikes, commentIds} = req.body;
        try {
            const newStatus = await Status.create({
                id,
                type,
                numberOfLikes,
                commentIds,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            res.status(201).json(newStatus);
        } catch (error) {
            res.status(500).json({error: 'Error creating status'});
        }
    }

    async update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const statusId = req.params.id;
        const {id, type, numberOfLikes, commentIds} = req.body
        Status.findByPk(statusId).then(status => {
            if (status) {
                status.update({id, type, numberOfLikes, commentIds}).then(() => {
                    res.status(200).json({message: 'Status updated successfully'});
                });
            } else {
                res.status(404).json({message: 'Status not found'});
            }
        });
    }

    async delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const statusId = req.params.id;
        Status.findByPk(statusId).then(status => {
            if (status) {
                status.destroy().then(() => {
                    res.status(200).json({message: 'Status deleted successfully'});
                });
            } else {
                res.status(404).json({message: 'Status not found'});
            }
        });
    }

    async addComment(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const statusId = req.params.id;
        const commentId = req.body.comment;
        Status.findByPk(statusId).then(status => {
            if (status) {
                status.commentIds.push(commentId);
                status.update({commentIds: status.commentIds}).then(() => {
                    res.status(200).json({message: 'Comment added to status successfully'});
                });
            } else {
                res.status(404).json({message: 'Status not found'});
            }
        });
    }

    async removeComment(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction): Promise<void> {
        const statusId = req.params.id;
        const commentId = req.body.comment;
        Status.findByPk(statusId).then(status => {
            if (status) {
                status.commentIds = status.commentIds.filter((id: number) => id !== commentId);
                status.update({commentIds: status.commentIds}).then(() => {
                    res.status(200).json({message: 'Comment removed from status successfully'});
                });
            } else {
                res.status(404).json({message: 'Status not found'});
            }
        });
    }
}

export const UserControllerInstance = new UserController();
export const CartControllerInstance = new CartController();
export const CommentsControllerInstance = new CommentsController();
export const StatusControllerInstance = new StatusController();
