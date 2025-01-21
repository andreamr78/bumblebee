import express from 'express';
import authController from '../controllers/authController';

// Create a new router to handle routes for the auth controller
const router = express.Router();

// Define routes for the auth controller
router.post('/signup', authController.signUp);
router.post('/login', authController.login);

export default router;