import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Set the database connection parameters
const dbHost = process.env.DB_URL || 'localhost';
const dbPort = process.env.DB_PORT || '5432';
const dbUser = process.env.DB_USER || 'user';
const dbPassword = process.env.DB_PASSWORD || 'password';
const dbName = process.env.DB_NAME || 'database';

// Initialize a new Sequelize instance
// const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
//     host: dbHost,
//     port: Number(dbPort),
//     dialect: 'postgres',
//     logging: false,
// });
let sequelize: Sequelize;
if (process.env.DB_URL) {
     sequelize = new Sequelize(process.env.DB_URL);
  } else {
     sequelize = new Sequelize(
        dbName, dbUser, dbPassword,
      {
        host: dbHost,
        port: Number(dbPort),
        dialect: 'postgres',
        logging: false,
      },
    );
  }

// Define the connectDB function
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelize;