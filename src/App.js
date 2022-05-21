import "./App.css";
import react, { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import { AppContext } from "./context";
import { Route, Routes } from "react-router-dom";
import Modal from "./Model";

const userList = [
  {
    id: 1,
    name: "nithya",
    password: 123,
  },
];

function App() {
  const [users, setUser] = useState(userList);

  const dispatchUSerEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USERS":
        // const userData = userList.find((user) => user.name === name.value);

        setUser([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUser(users.filter((user) => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <AppContext.Provider value={{ users, dispatchUSerEvent }}>
        <AddUser />
        <UserList />
        <Modal />
      </AppContext.Provider>
    </div>
  );
}
export default App;
