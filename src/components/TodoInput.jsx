import { useState } from 'react';

function TodoInput({ onTodoAdd }) {
  const [inputText, setInputText] = useState('');

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    if (inputText === '') {
      alert('빈 값은 저장할 수 없습니다.');
      return;
    }
    onTodoAdd(inputText);
    setInputText('');
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
