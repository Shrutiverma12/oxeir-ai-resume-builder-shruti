import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const DB_URL = process.env.DB_URL;

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
