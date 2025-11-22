import express from 'express';
import dotenv from 'dotenv';
import pool from '../db.js';
import {addUser, createToken, findUserByEmail} from "../controllers/user.controller.js";
import cors from "cors";
import {isAuthenticated} from "../middlewares/authenticate.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log(req.body)
    const { email, password, login } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email и пароль являются обязательными' });
    }

    const isUserFound = await findUserByEmail(email)
    if (isUserFound) {
        return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    try {
        try {
            await addUser(password, email, login);
        } catch (error) {
            console.error('Ошибка при добавлении пользователя:', error);
            return res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
        }
        const user = await findUserByEmail(email);
        const token = createToken(email, login)
        res.cookie('token', token)
        res.status(201).json({
            message: 'Пользователь успешно зарегистрирован',
            redirectUrl: '/',
            user: user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password)

    if (!email || !password) {
        return res.status(400).json({ message: 'Email и пароль являются обязательными' });
    }

    try {
        /**
         * @type {{ id: number, login: string, password_hash: string, email: string } | boolean}
         */
        const user = await findUserByEmail(email);
        console.log(user)

        if (!user || !(await bcrypt.compare(password, user?.password_hash))) {
            console.log(!user)
            console.log(await bcrypt.compare(password, user?.password_hash))
            return res.status(401).json({ message: 'Неверные данные' });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({
            message: 'Вход выполнен успешно',
            redirectUrl: '/',
            user: user,
            token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

router.post('/user', isAuthenticated, async (req, res) => {
    res.json({ message: 'Доступ разрешен', user: req.user });
})

router.post('/logout', async (req, res) => {
    res.clearCookie('token');
    res.status(200).send({ message: 'Выход выполнен успешно' });
})

export const authRoutes = router;