import express from 'express';
import { createServer, Server } from 'http';
import chatRoutes from './routes/chatRoutes.js';
import rateLimiter from './middlewares/rateLimiter.js';
import sanitizeInput from './middlewares/sanitizeInput.js';
import cors from 'cors';
import { OPENAI_API_KEY, PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';

const app = express();

const server = createServer(app);

console.log('posrt is', PORT);
console.log('APi', OPENAI_API_KEY);

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use(sanitizeInput);

app.use('/api/career-coach', chatRoutes);

server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
