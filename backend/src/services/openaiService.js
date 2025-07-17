import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config/serverConfig.js';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENAI_API_KEY,
});

export async function getOpenAIResponse(messages) {
  const completion = await openai.chat.completions.create({
    model: 'microsoft/mai-ds-r1:free',
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });
  return {
    text:
      completion.choices[0]?.message?.content || 'Sorry, I could not answer.',
    suggestions: [
      'Can you suggest free resources?',
      'What projects help me practice?',
      'How do I build a strong LinkedIn profile?',
    ],
  };
}
