import express from 'express';
import apiRoutes from './api/index.js'; 

const router = express.Router();

router.use('/', apiRoutes);
router.use((_, res) => res.status(404).send('Route not found'));

export default router;
