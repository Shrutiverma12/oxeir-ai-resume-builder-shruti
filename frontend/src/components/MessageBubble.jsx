import ReactMarkdown from 'react-markdown';

export default function MessageBubble({ role, content }) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-1`}>
      <div
        className={`
                    max-w-[75%]
                    px-4 py-2 rounded-lg text-sm
                    ${
                      isUser
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-50 text-gray-900'
                    }
                `}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
