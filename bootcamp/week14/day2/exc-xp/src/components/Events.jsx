import React, {useState} from 'react';

const Events = () => {
  const clickMe = () => {
    alert(`I was clicked`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") { 
      alert(`The Enter key was pressed. Your enter is: ${event.target.value}`);
    }
  };

const [isToggleOn, setIsToggleOn] = useState(true);
const toggleState = () => {
    setIsToggleOn(!isToggleOn)
}
  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press the Enter key" />
      <button onClick={toggleState}>{isToggleOn? 'ON':'OFF'}</button>
    </div>
  );
};

export default Events;
