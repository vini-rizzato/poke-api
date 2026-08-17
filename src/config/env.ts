import dotenv from 'dotenv';

dotenv.config();

function getEnv(key: string, fallback?: string): string {
    const value = process.env[key] ?? fallback;

    if(value === undefined) {
        throw new Error(`Enviroment variable missing: ${key}`)
    }

    return value;
}

export const envData = {
    db:{
        user: getEnv('DB_USER'),
        password: getEnv('DB_PASSWORD'),
        host: getEnv('DB_HOST'),
        port: Number(getEnv('DB_PORT', '5432')),
        database: getEnv('DB_NAME')
    }
}