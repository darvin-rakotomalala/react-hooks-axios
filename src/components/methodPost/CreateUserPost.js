import React, { useState } from "react";
import Axios from "axios";

function CreateUserPost() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: name,
    };

    try {
      const userDataRes = await Axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        { userData }
      );
      if (userDataRes.status === 201) {
        alert(userDataRes.data.userData.name);
      } else {
        alert("Please check your data carefully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Exemple 2 - méthode POST Async/Await</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Person Name :{" "}
          <input type="text" name="name" onChange={handleChange} />
        </label>{" "}
        <button type="submit">Add Person</button>
      </form>
    </div>
  );
}

export default CreateUserPost;
