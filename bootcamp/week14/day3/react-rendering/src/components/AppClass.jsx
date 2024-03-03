import React from "react";

class AppClass extends React.Component{
    constructor(){
        super();
        this.state = {
            username: 'John'
        }
        console.log('1=>constructor');
    }
    handleChange =(e)=>{
        this.setState({username: e.target.value})
    }
    componentDidMount = () => {
        // setTimeout(() => {
        //     this.setState({username: "Dan"})
        // },5000)
        console.log('3=>componentdidmount')
    }
    componentDidUpdate = (prepProps, prevState)=>{
        console.log('4 => componen did update')
        console.log('prepProps =>', prepProps)
        console.log("prevState =>", prevState)
        if(prevState.username === 'John'){
            alert('Help!!!!')
        }
    }
    render(){
        return(
                <div>
                {console.log('2=> render')}
                <input onChange={this.handleChange} />
                <h1>Class Component: Username {this.state.username}</h1>
            </div>
        )
    }
};

export default AppClass;