import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Variable to store the secret key
const secretKey = process.env.JWT_SECRET || 'secret_key';

declare module 'express' {
    interface Request {
      userId?: string;
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Retrieves the token from the Authorization header by splitting the string and getting the second element
    const token = req.headers['authorization']?.split(' ')[1];

    // If there is no token, it sends a 403 status code and a message
    if (!token) {
        return res.status(403).json({ message: 'No token' });
    }

    // Verifies the token with the secret key and calls the next middleware
    jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        next();
    });
};

// Middleware to check if the user is authenticated
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    // If there is no userId in the request object, it sends a 401 status code and a message
    if (!req.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};