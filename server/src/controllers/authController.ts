import { Request, Response } from 'express';
import AuthService from '../services/authService'; 

class AuthController {
    async signUp(req: Request, res: Response) {
        try {
            // tries to create a new user by calling the signUp method from the AuthService class
            const { username, email, password } = req.body;
            const user = await AuthService.signUp(username, email, password);
            res.status(201).json({ message: 'User created', user });
        } catch (error) {
            // if an error occurs, it sends a 400 status code and a message with the error
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(400).json({ message: 'Unknown error' });
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            //tries to log in the user by calling the login method from the AuthService class
            const { email, password } = req.body;
            const { token, user } = await AuthService.login(email, password);
            res.status(200).json({ message: 'Login successful', token, user });
        } catch (error) {
            // if an error occurs, it sends a 401 status code and a message with the error
            if (error instanceof Error) {
                res.status(401).json({ message: error.message });
            } else {
                res.status(401).json({ message: 'Unknown error' });
            }
        }
    }
}

export default new AuthController();