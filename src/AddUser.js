import react, { useState, useContext } from "react";
import { AppContext } from "./context";

function AddUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { dispatchUSerEvent } = useContext(AppContext);

  const handleClick = () => {
    const user = { id: Math.random(), name, password };
    dispatchUSerEvent("ADD_USERS", { newUser: user });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
  };

  return (
    <div>
      Add users
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleClick}>Add user</button>
      </form>
    </div>
  );
}
export default AddUser;
