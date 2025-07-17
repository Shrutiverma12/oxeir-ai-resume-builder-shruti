import express from 'express';
import ChatLog from '../models/ChatLog.js';
import { getOpenAIResponse } from '../services/openaiService.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { userId, message } = req.body;
  const previousChats = await ChatLog.findOne({ userId });

  let context = previousChats?.messages.slice(-5) || [];
  context.push({ role: 'user', content: message, timestamp: new Date() });

  const response = await getOpenAIResponse(context);

  const updatedMessages = [
    ...context,
    { role: 'assistant', content: response.text, timestamp: new Date() },
  ];

  await ChatLog.findOneAndUpdate(
    { userId },
    { userId, messages: updatedMessages },
    { upsert: true }
  );

  res.json({
    response: response.text,
    suggestions: response.suggestions,
    // response: `Mock AI reply to: ${message}`,
    // suggestions: ['What should I learn next?', 'How to improve resume?'],
  });
});

// router.post('/chat', async (req, res) => {
//   console.log('Frontend sent:', req.body.message);

//   res.json({
//     response: `Mock AI reply to: ${req.body.message}`,
//     suggestions: ['What skills should I learn?', 'How do I improve my resume?'],
//   });
// });

export default router;
