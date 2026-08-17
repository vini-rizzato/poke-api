import express from 'express';
import jsonRegisterValidation from '../middlewares/register/jsonRegisterValidator';
import registerEmailExist from '../middlewares/register/registerEmailExist';
import RegisterUser from '../controllers/RegisterUser';
import serverError from '../middlewares/serverError';

const registerRouter = express.Router();

registerRouter.post('/', jsonRegisterValidation, registerEmailExist, RegisterUser);

export default registerRouter;