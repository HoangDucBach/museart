import {Request, Response} from 'express';
import {User} from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {config} from "dotenv-flow";


declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

export class UserController {
    static async getUsers(req: Request, res: Response) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({error: 'Error getting users'});
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const {username, email, password, role} = req.body;
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
            res.status(500).json({error: 'Error creating user'});
        }
    }

    static async getUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error getting user'});
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const {username, email, password, role} = req.body;
            const user = await User.findByPk(userId);
            if (user) {
                await user.update({username, email, password, role});
                res.status(200).json({message: 'User updated successfully'});
            } else {
                res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error updating user'});
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const user = await User.findByPk(userId);
            if (user) {
                await user.destroy();
                res.status(200).json({message: 'User deleted successfully'});
            } else {
                res.status(404).json({message: 'User not found'});
            }
        } catch (error) {
            res.status(500).json({error: 'Error deleting user'});
        }
    }
    static async signUp(req: Request, res: Response) {
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
    static async signIn(req: Request, res: Response) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if (!user) {
                return res.status(404).json({message: 'User not found'});
            }
            // const isValidPassword = await bcrypt.compare(password, user.password);
            // if (!isValidPassword) {
            //     return res.status(401).json({message: 'Invalid password'});
            // }
            const token = jwt.sign({id: user.id, email: user.email}, process.env.SECRET_KEY as string, {expiresIn: '1h'});
            res.json({token});
        } catch (error) {
            res.status(500).json({error: 'Error signing in', message: error});
            console.log(error);
        }
    }
}
