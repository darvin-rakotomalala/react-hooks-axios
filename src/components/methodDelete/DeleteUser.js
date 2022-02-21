import React, { useState } from "react";
import axios from "axios";

function DeleteUser() {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(userData);
      if (userData.status === 200) {
        alert("User deleted sucessfully");
      } else {
        alert("Please check your data carefully");
      }
    } catch (error) {}
  };

  return (
    <div>
      <h2>3. Exemple méthode DELETE Async/Await</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Person ID : <input type="text" name="id" onChange={handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteUser;
