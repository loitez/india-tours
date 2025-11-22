import bcrypt from "bcryptjs";
import pool from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const findCourseBySlug = async (courseSlug) => {
    console.log(courseSlug)
    const result = await pool.query('SELECT * FROM courses WHERE slug = $1', [courseSlug]);
    console.log(result)
    return result.rows.length > 0 ? result.rows[0] : false;
};
