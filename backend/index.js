import app from './app.js';
import connectDatabase from '../backend/config/db.js';
import { config as dotenvConfig } from 'dotenv';
import cloudinary from 'cloudinary';

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  dotenvConfig({ path: '../.env' });
}

// connect to db
connectDatabase();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log('Shutting down the server for unhandled promise rejection');

  server.close(() => {
    process.exit(1);
  });
});

export default server;
