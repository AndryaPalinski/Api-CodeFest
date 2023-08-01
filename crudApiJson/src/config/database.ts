import mysql from 'mysql2'; 
// 127.0.0.1 = localhost 
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PWD,
database: process.env.DB_NAME
});

export default {
    connection
}