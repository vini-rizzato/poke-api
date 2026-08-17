import {Request, Response, NextFunction} from 'express';
import pool from '../config/db';

function RegisterUser(req: Request, res: Response, next: NextFunction) {
    const [name, email, password] = req.body;

    pool.query('INSERT INTO users(name, email, password_hash, is_active, created_at, updated_at)',)

}

export default RegisterUser;