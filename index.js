import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// Load environment variables
dotenv.config();

// Import custom modules
import connectDB from './config/db.js';
import ensureUploadDir from './utils/ensureUploadDir.js';

// Import routes
import authRoutes from './routes/auth.js';
import propertyRoutes from './routes/property.js';
import enquiryRoutes from './routes/enquiry.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Setup __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const _dirname = dirname(_filename);

// ------------------- Middleware -------------------
app.use(cors());
app.use(bodyParser.json());

// ------------------- Uploads Folder -------------------
ensureUploadDir();
app.use('/api/uploads', express.static(path.join(path.resolve(), 'uploads')));

// ------------------- Connect to MongoDB -------------------
connectDB();

// ------------------- API Routes -------------------
app.use('/api', authRoutes);
app.use('/api', propertyRoutes);
app.use('/api', enquiryRoutes);

// ------------------- Serve React Frontend in Production -------------------
// app.use(express.static(path.join(__dirname, 'client', 'build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

// ------------------- Start Server -------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});