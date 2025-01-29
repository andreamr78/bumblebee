import express from 'express';
import cors from 'cors';
import routes from './routes/authRoutes';
import { connectDB } from './utils/db';
import sequelize from './utils/db';

// Initialize the Express application and set the port
const app = express();
const PORT = process.env.PORT || 3001;

// Enable the use of the CORS
app.use(cors());

// Enable the use of the JSON body parser
app.use(express.static('../client/vite-project/dist'));
app.use(express.json());
// Connect to the database and start the server
connectDB();
// Define the /api/auth route
app.use('/api/auth', routes);
// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});