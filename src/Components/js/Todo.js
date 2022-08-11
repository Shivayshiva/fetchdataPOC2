import React, { useState, useEffect } from "react";
import "../css/Todo.css";

const Todo = (props) => {
  // const [state1, setstate1] = useState([]);

  // const fetchdata = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => setstate1(data));
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const val = props.data;

  return val === undefined ? (
    <h1>Loading....</h1>
  ) : (
    <table>
      <tr>
        <th>UserID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.title}</td>
          <td>{val.completed ? "Completed" : "Not Completed"}</td>
        </tr>
      ))}
    </table>
  );
};

export default Todo;
