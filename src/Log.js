import react from "react";
import "./App.css";

function Log() {
  return (
    <div>
      <div className="form d-flex justify-content-center p-3">
        <form>
          <div className="input-container">
            <label className="">Login </label>
            <br></br>
            <input
              className="inputfield"
              type="text"
              name="uname"
              placeholder="Enter login"
            />
          </div>
          <br></br>

          <div className="input-container">
            <label>Password </label>
            <br></br>
            <input
              className="inputfield"
              type="password"
              name="pass"
              placeholder="Enter password"
            />
          </div>
          <br></br>
          <div className="button-container">
            <button type="submit" className="btn loginButton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Log;
