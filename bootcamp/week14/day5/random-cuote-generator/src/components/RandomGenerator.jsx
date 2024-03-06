import React, { useState } from "react";
import quotes from "./QuotesDatabase";

const RandomGenerator = () => {
    const [quote, setQuote] = useState({
        text: 'Esto es una cita fija',
        author: 'Autor fijo'
    });

    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        console.log("Quote:", quotes[randomIndex]);
        setQuote(quotes[randomIndex]);
    };

    console.log("All quotes:", quotes);

    return (
        <div className="container">
            <button onClick={generateRandomQuote}>Generate Quote</button>
            <div className="quote">
                {quote.text && (
                    <>
                        <p>{quote.text}</p> 
                        <h5 className="author">{quote.author}</h5>
                    </>
                )}
            </div>
        </div>
    );
};

export default RandomGenerator;

//i dont know why i been trying to debug all day long i cant find the mistake, if i do {quote.author} in consolelog i can see it but not outside. 