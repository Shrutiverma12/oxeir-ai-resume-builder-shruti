export default function InputBox({ value, setValue, onSend }) {
  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  };

  return (
    <div className='flex items-center gap-2 border rounded-lg px-3 py-2 shadow-sm bg-white'>
      <input
        className='flex-1 outline-none bg-transparent'
        placeholder='Type a message...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className='bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition'
        onClick={() => handleSend()}
      >
        Send
      </button>
    </div>
  );
}
