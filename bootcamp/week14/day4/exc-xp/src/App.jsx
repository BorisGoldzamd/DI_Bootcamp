import { Component } from 'react'
import './App.css'
import BuggyCounter from './components/Buggycounter'
import Child from './components/Child'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  handleButtonClick = () => {
    this.setState({ show: false });
  }

  render() {
    const { favoriteColor, show } = this.state;

    return (
      <div>
        {show && <Child />}
        <button onClick={this.handleButtonClick}>Delete</button>
        <h1>{favoriteColor}</h1>
        <BuggyCounter />
      </div>
    );
  }
}

export default App;