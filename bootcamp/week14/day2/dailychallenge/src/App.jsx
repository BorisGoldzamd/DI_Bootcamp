import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);
  const vote = (index) => {
    setLanguages(prevLanguages => {
      const newLanguages = [...prevLanguages];
      newLanguages[index] = { ...newLanguages[index], votes: newLanguages[index].votes + 1 };
      return newLanguages;
    });
  };
  return (
    <div>
      <h2>Voting Options</h2>
      {languages.map((language, index) => (
        <div key={index}>
          <span>{language.name}</span>
          <button onClick={() => vote(index)}>Vote</button>
          <span>Votes: {language.votes}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
