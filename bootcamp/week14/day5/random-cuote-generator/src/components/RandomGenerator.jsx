import quotes from "./QuotesDatabase";
import React, {useState} from "react";

const RandomGenerator = () =>{
    const [quote, setQuote] = useState({
        text: '',
        author:''
    });
    return(
        <div className="container">
            <div className="quote"></div>
        </div>
    )
};

export default RandomGenerator