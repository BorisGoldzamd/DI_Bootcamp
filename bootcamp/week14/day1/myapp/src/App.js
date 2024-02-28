import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello</h1>
      {/* <Hello/> */}
      <Users/>
      </header>
    </div>
  );
}

export default App;
