import {Request, Response, NextFunction} from 'express';
import pool from '../config/db';

async function registerEmailExist(req: Request, res: Response, next: NextFunction) {
    const [email] = req.body;
    
    const busca = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if(busca.rowCount != 0 && busca.rowCount != null) {
        return res.status(409).json({ message: 'Email ja existe' })
    }

    next()
}

export default registerEmailExist;