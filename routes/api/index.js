import express from 'express';
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// Use the routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;
