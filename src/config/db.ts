import { Pool } from 'pg';
import { envData } from './env';

const pool = new Pool({
    user: envData.db.user,
    password: envData.db.password,
    host: envData.db.host,
    port: envData.db.port,
    database: envData.db.database
});

export default pool;