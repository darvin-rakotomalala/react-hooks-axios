import React, { useState, useEffect } from "react";
import Axios from "axios";

function GetUserDetail2() {
  const [userData, setUserData] = useState([]);

  const getUserDetail = async () => {
    try {
      const userData = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setUserData(userData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      <h2>Exemple 1-2 - méthode GET</h2>
      <hr />
      {userData.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
}

export default GetUserDetail2;
