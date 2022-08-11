import React, { useState, useEffect } from "react";
import "../css/Users.css";

const Users = (props) => {
  // const [state2, setstate2] = useState([]);

  // const fetchdata = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setstate2(data));
  // };

  // useEffect(() => {
  //   fetchdata();
  //   console.log(state2.title);
  // }, []);
  const val = props.data;

  return val === undefined ? (
    <h1>Loading....</h1>
  ) : (
    <table>
      <tr>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
        <th>Website</th>
        <th>Company</th>
      </tr>

      {val.map((val) => (
        <tr key={val.id}>
          <td>{val.name}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>
            <div>{val.address.street}</div>
            <div>{val.address.city}</div>
            <div>{val.address.zipcode}</div>
          </td>
          <td>{val.website}</td>
          <td>
            <div>Company Name:- {val.company.name}</div>
            <div>Phrase :- {val.company.catchPhrase}</div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Users;
