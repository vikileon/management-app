import { useState } from 'react';

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      setIsInvalid(true);
      setTimeout(() => setIsInvalid(false), 500);
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        onChange={handleChange}
        value={enteredTask}
        className={`w-64 px-2 py-1 rounded-sm transition-colors duration-700 ease-out ${
          isInvalid ? 'bg-red-100' : 'bg-stone-200'
        }`}
      />
      <button
        onClick={handleClick}
        className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-300 hover:bg-stone-400 hover:text-stone-100'
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
