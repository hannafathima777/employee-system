import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Create the pool
const pool = mysql.createPool(dbConfig);

/**
 * Immediate test to ensure Docker MySQL is reachable
 */
try {
    const connection = await pool.getConnection();
    console.log('Connected to  MySQL ');
    connection.release();
} catch (err) {
    console.error('Database Connection Failed:');
    console.error(err.message);
}

export default pool;