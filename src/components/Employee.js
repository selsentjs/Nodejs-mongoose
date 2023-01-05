import React, { useState } from "react";

const Employee = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const [data, setData] = useState([]);

  return (
    <div>
      <form>
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
        <br /> <br />
      </form>
    </div>
  );
};

export default Employee;
