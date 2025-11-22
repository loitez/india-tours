import express from 'express'
import { feedbackRoutes } from './feedbackRoutes.js';
import { coursesRoutes } from './coursesRoutes.js'
import { authRoutes } from './authRoutes.js';

const router = express.Router();

router.use('/feedback', feedbackRoutes);
router.use('/courses', coursesRoutes);
router.use('/auth', authRoutes);

export const routes = router;