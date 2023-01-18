import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const saveUser = async () => {
    try {
      await axios.post("http://localhost:3001/api/v1/employee/create", {
        name,
        designation,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Name</label>
          <div>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
        </div>
        <div>
          <label>designation</label>
          <div>
            <input
              type="text"
              className="input"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="designation"
            />
          </div>
        </div>

        <button type="submit" onClick={saveUser}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUser;
