import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
const Edit = ({
  employees,

  setEmployees,
  setIsEditing,
  customerId,
}) => {
  // console.log("id of cust: ", customerId)
  const [selectedEmployee, setSelectedEmployee] = useState({});

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const fetchSingleCust = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${customerId}`);
        const data = await response.json();
        setName(data.user.name);
        setPhone(data.user.phone);
        setEmail(data.user.email);
        setSelectedEmployee(data.user);
        // console.log("updagte,", data.user);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchSingleCust();
  }, []);

  // const id = selectedEmployee.id;

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const updatedEmployee = {
      name,
      phone,
      email,
    };

    // const updateCustomer = async (customerId, updatedCustomer) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/update/${customerId}`,
        updatedEmployee
      );
      console.log("update res: ", response)
    } catch (error) {
      console.error("Error updating customer:", error);
    }

    // localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(updatedEmployee);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Customer</h1>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
