import './App.css'
import users from './users.json';
import User from './components/User';
import "tachyons";
import Switch from'@mui/material/Switch';
console.log(users);
function App() {
  return (
    <>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <User 
              id={item.id}
              name={item.name}
              email={item.email}
            />
            <Switch defaultChecked />
          </div>
        );
      })}
    </>
  );
}

export default App;
