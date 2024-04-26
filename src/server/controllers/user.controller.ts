import {NextFunction, Request, Response} from 'express';
import {User} from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {config} from "dotenv-flow";
import {IBaseController} from "./base.controller";
import {ParamsDictionary} from 'express-serve-static-core';
import {ParsedQs} from 'qs';

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
            res.status(201).json(newUser);
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
            if(password !== user.password){
                return res.status(401).json({message: 'Invalid password'});
            }
            const token = jwt.sign({
                id: user.id,
                email: user.email,
            }, process.env.SECRET_KEY as string, {expiresIn: '1h'});
            res.json({token});
        } catch (error) {
            res.status(500).json({error: 'Error signing in', message: error});
            console.log(error);
        }
    }
}

export const UserControllerInstance = new UserController();