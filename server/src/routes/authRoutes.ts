import express from 'express';
import authController from '../controllers/authController';
import { verifyToken } from '../middlewares/authMiddleware';

// Create a new router to handle routes for the auth controller
const router = express.Router();

// Define routes for the auth controller
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.get('/private', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is the private route' });
});

export default router;