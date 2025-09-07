import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import tasksRouter from './routes/tasks.js';
import mentorsRouter from './routes/mentors.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const ALLOWED = (process.env.CORS_ORIGIN || '*')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({
  origin: function (origin, cb) {
    if (!origin || ALLOWED.includes('*') || ALLOWED.includes(origin)) return cb(null, true);
    return cb(new Error('CORS blocked for ' + origin));
  }
}));

// --- API routes ---
app.get('/api', (req, res) => res.json({ status: 'ok', service: 'dnx-server' }));
app.use('/api/tasks', tasksRouter);
app.use('/api/mentors', mentorsRouter);

// --- Serve React frontend build ---
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// --- MongoDB connection ---
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server on http://localhost:' + PORT));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });
