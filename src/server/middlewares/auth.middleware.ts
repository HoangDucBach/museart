import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";
import {UserController, UserControllerInstance} from "../controllers/user.controller";
import {User} from "../models/user.model";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({message: 'Access denied. Token is required.'});
    }
    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
            return res.status(403).json({message: 'Invalid token.'});
        }
        req.user = decoded;
        next();
    });
};
export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. Token is required.');
    }
    jwt.verify(token, process.env.SECRET_KEY as string, async (err, decoded) => {
        if (err) {
            return res.status(403).json('Invalid token.');
        }
        const payload = decoded as jwt.JwtPayload;
        const user = await User.findOne({where: {id: payload.id}});

        if (user !== null) {
            if (user.role === 'admin') {
                req.user = payload;
                next();
            } else {
                res.status(403).json({message: 'Unauthorized access'});
            }
        }
    });
}