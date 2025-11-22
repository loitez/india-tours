import bcrypt from "bcryptjs";
import pool from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export async function addUser(password, email, login) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password_hash, login) VALUES ($1, $2, $3)', [email, hashedPassword, login]);
}

export const findUserByEmail = async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows.length > 0 ? result.rows[0] : false;
};


export const createToken = (email, login) => {
    const secret = process.env.JWT_SECRET;
    console.log(process.env.JWT_SECRET)
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ email, login }, secret, { expiresIn: '1h' });
};