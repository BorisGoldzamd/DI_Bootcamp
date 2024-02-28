import { useState } from "react";
const Test = (props) => {
    const [name,setName] = useState('John');
    const handlesubmit = () => {
        // setName('Dan')
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data)=>{
            console.log(data);
            this.setState({users: data})
        })
        .catch((e) => console.log(e));
    }
    return(
        <>
            <h2>I am a function component</h2>
            <h1>{name}</h1>
            <button onClick={handlesubmit}>Submit</button>
        </>
    )
}

export default Test;