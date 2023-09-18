import React, { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      name,
      phone,
      email,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/add",
        newEmployee
      );
      // employees.push(newEmployee);
      // localStorage.setItem("employees_data", JSON.stringify(employees));
      setEmployees(response.data.data);
      console.log("added user: ", response.data.data);
      setIsAdding(false);

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: `${name}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Customer</h1>
        <label htmlFor="firstName">Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="lastName">Phone</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
