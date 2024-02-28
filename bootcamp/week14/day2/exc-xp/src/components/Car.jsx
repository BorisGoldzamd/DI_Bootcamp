import React,{ useState } from 'react';
function Car(props) {
  const [color, setColor] = useState('red')
  return (
    <div>
      <h1>This car is {props.model}</h1>
      <p>The car's name is {props.name}</p>
      <p>The car color is {color}</p>
    </div>
  );
}

export default Car;
