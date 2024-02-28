import React, { useState } from 'react';

const Phone = () => {
  // Part I: State variables
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  // Part II: Function to change color
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      {/* Display state variables */}
      <p>Brand: {brand}</p>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <p>Year: {year}</p>

      {/* Button to change color */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
