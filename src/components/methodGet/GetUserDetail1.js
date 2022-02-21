import React, { useState, useEffect } from "react";
import Axios from "axios";

function GetUserDetail1() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(function (res) {
        setUserData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Exemple 1-1 - méthode GET Async/Await</h2>
      <hr />
      {userData.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
}

export default GetUserDetail1;
