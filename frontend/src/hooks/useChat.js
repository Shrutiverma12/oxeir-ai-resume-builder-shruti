import { useState } from 'react';
import axios from 'axios';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([
    'How do I get a job in Data Science?',
    'What skills should I learn for Frontend?',
    'How to crack interviews?',
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg) => {
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: msg }]);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/career-coach/chat',
        {
          userId: 'shruti123',
          message: msg,
        }
      );
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: res.data.response },
      ]);
      setSuggestions(res.data.suggestions || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, suggestions, loading };
}
