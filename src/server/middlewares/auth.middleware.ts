import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    console.log(req.headers);
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is required.' });
    }
    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.user = decoded;
        next();
    });
};