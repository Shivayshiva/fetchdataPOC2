import "./App.css";
import React, { useState } from "react";
import Todo from "./Components/js/Todo.js";
import Users from "./Components/js/Users.js";
import Comments from "./Components/js/Comments.js";

function App() {
  const [valset, setValset] = useState("");
  const updatetodo = () => {
    setValset("ToDo");
  };
  const updateusers = () => {
    setValset("Users");
  };
  const updatecomments = () => {
    setValset("Comments");
  };

  const renderelement = () => {
    switch (valset) {
      case "ToDo":
        return <Todo />;
      case "Users":
        return <Users />;
      case "Comments":
        return <Comments />;
      default:
        return <Todo />;
    }
  };
  return (
    <>
      <div clasName="navbar">
        <div className="navitem" onClick={updatetodo}>
          ToDo List
        </div>
        <div className="navitem" onClick={updateusers}>
          User List
        </div>
        <div className="navitem" onClick={updatecomments}>
          Comments
        </div>
      </div>
      <br />
      <br />

      {renderelement()}
    </>
  );
}

export default App;
