import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import SuggestedPrompts from './SuggestedPrompts';

export default function ChatWindow({ messages, suggestions, setInput }) {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className='flex flex-col gap-4 p-4 overflow-y-auto h-full'
    >
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} role={msg.role} content={msg.content} />
      ))}

      {suggestions?.length > 0 && (
        <div className='flex flex-wrap flex-col gap-2 mt-2'>
          {suggestions.map((prompt, idx) => (
            <button
              key={idx}
              className='px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 hover:bg-gray-200 transition'
              onClick={() => setInput(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
