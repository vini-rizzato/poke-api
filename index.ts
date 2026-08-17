import express from 'express'
import registerRouter from './src/routers/registerRouter';
import pool from './src/config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use('/register', registerRouter);

app.listen(PORT??8080, () => {
    console.log(`Servidor ouvindo na porta ${PORT??8080}`)
});
