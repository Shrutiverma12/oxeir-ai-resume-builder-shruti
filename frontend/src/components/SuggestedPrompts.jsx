export default function SuggestedPrompts({ suggestions, onClick }) {
  return (
    <div className='flex gap-2 flex-wrap my-2'>
      {suggestions.map((sug, idx) => (
        <button
          key={idx}
          onClick={() => onClick(sug)}
          className='border rounded px-2 py-1 text-sm hover:bg-gray-100'
        >
          {sug}
        </button>
      ))}
    </div>
  );
}
