import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../config/db';
import { envData } from '../config/env';

async function RegisterUser(req: Request, res: Response, next: NextFunction) {
    const {name, email, password} = req.body;

    const saltround = 10;

    const hashedPassword = bcrypt.hash(password, saltround);

    try {
        const result = await pool.query('INSERT INTO users(name, email, password_hash, is_active, created_at, updated_at) VALUES ($1, $2, $3, True, NOW(), NOW())', [name, email, hashedPassword])

        const token = jwt.sign({ foo: 'bar' }, envData.sign.jwtToken, { algorithm: 'RS256' });

        return res.status(201).json({ message: `User created`, token: token });
    }catch{
        next();
    }

}

export default RegisterUser;