import React, { useState, useEffect } from "react";
import axios from "axios";

const Employee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/employee/").then((response) => {
      setData(response.data.ListEmployees);
      console.log("response1:", response.data.ListEmployees);
    });
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/api/v1/employee/create", {
        name,
        designation,
      })
      .then((response) => {
        setData(response.data);
        console.log("response2:", response.data);
      });
  };

  // update
  const updateUser = () => {
    // axios
    //   .put("http://localhost:3001/api/v1/employee/1", {
    //     name: "Senthil Kumar",
    //     designation: "Manager",
    //   })
    //   .then((response) => {
    //     setData(response.data);
    //   });
  };

  // delete
  const deleteUser = () => {
    // axios.delete("http://localhost:3001/api/v1/employee/4").then(() => {
    //   alert("user deleted");
    //   setData(null);
    // });
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br /> <br />
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        ></input>
        <br /> <br />
        <button>Add</button>
      </form>
      <br /> <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.designation}</td>
                <td>
                  <button onClick={updateUser}>update</button>
                  <button onClick={deleteUser}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
