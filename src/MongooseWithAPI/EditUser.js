import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/v1/employee/${id}`
    );
    setName(response.data.name);
    setDesignation(response.data.designation);
  };

  const updateUser = async () => {
   
    try {
      await axios.put(`http://localhost:3001/api/v1/employee/${id}`, {
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

        <button type="submit" onClick={updateUser}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUser;
