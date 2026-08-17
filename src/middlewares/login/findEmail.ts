import {Request, Response, NextFunction} from 'express';
import pool from '../../config/db';

async function findEmail(req: Request,  res: Response, next: NextFunction) {
    try{
        const {email} = req.body;

        const { rowCount } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if(!rowCount) {
        return res.status(404).json({ message: 'Email not exist' });
    }

    return next();
    }catch(error) {
        next(error);
    }
};

export default findEmail;