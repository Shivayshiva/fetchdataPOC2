import React, { useState, useEffect } from "react";
import "../css/Comments.css";

const Comment = (props) => {
  // const [state3, setstate3] = useState([]);

  // const fetchdata = () => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => res.json())
  //     .then((data) => setstate3(data));
  // };

  // useEffect(() => {
  //   fetchdata();
  // });
  const val = props.data;
  return val === undefined ? (
    <h1>Loading</h1>
  ) : (
    <table>
      <tr>
        <th>UserID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comment</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.email}</td>
          <td>{val.body}</td>
        </tr>
      ))}
    </table>
  );
};

export default Comment;
