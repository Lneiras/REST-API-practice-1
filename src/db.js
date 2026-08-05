import pg from 'pg';
import dotenv from 'dotenv';

// Inicializar la configuración de variables de entorno
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Probar la conexión al iniciar
//pool.query('SELECT NOW()')
//   .then(() => console.log('🚀 Conexión exitosa a PostgreSQL con user123'))
//    .catch(err => console.error('❌ Error de conexión:', err));

export default pool;