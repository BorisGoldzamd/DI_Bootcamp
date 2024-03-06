import React, { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleAddThem = () => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);
    const sum = num1 + num2;
    setResult(sum);
  };

  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter number 1"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter number 2"
      />
      <button onClick={handleAddThem}>ADD THEM</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default Calculator;
