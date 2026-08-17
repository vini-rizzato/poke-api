import {Request, Response, NextFunction} from 'express';

function jsonRegisterValidation(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: 'Empty fields in form' })
    }

    next()
}

export default jsonRegisterValidation;