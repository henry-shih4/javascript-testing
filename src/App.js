import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }
  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <hr />
      <UserList users={users} addUser={addUser} />
    </div>
  );
}

export default App;
