import express from 'express';
import jsonRegisterValidation from '../middlewares/jsonRegisterValidator';
import registerEmailExist from '../middlewares/registerEmailExist';
import RegisterUser from '../controllers/RegisterUser';

const registerRouter = express.Router();

registerRouter.post('/', jsonRegisterValidation, registerEmailExist, RegisterUser)

export default registerRouter;