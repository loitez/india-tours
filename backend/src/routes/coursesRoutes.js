import express from 'express'
import pool from '../db.js';
import {findCourseBySlug} from "../controllers/courses.controller.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.post('/getCourse', async (req, res) => {
    const { slug } = req.body;

    console.log(slug)
    console.log(req.body)

    try {
        const result = await findCourseBySlug(slug);
        res.json(result);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

export const coursesRoutes = router;