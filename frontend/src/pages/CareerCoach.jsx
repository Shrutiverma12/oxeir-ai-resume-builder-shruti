import DailyTip from '../components/DailyTip';
import ChatWindow from '../components/ChatWindow';
import SuggestedPrompts from '../components/SuggestedPrompts';
import InputBox from '../components/InputBox';
import { useChat } from '../hooks/useChat';
import { useState } from 'react';

export default function CareerCoach() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, suggestions, loading } = useChat();

  const handleSend = (msg) => {
    sendMessage(msg);
    setInput('');
  };

  const handleSuggestionClick = (suggestion) => {
    setInput('');
    sendMessage(suggestion);
  };

  return (
    <div className='flex flex-col h-[99vh] max-w-3xl w-full mx-auto  rounded-lg shadow-md p-6 space-y-4 my-2 bg-blue-50'>
      <h1 className='text-xl font-bold text-center'>AI Career Coach</h1>
      <DailyTip />
      <div className='flex-1 overflow-y-auto'>
        <ChatWindow messages={messages} />
      </div>

      {loading && <p className='text-gray-500 text-center'>Loading...</p>}

      {!loading && suggestions.length > 0 && (
        <SuggestedPrompts
          suggestions={suggestions}
          onClick={handleSuggestionClick}
        />
      )}

      <InputBox value={input} setValue={setInput} onSend={handleSend} />
    </div>
  );
}
