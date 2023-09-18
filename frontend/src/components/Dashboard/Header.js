import React from "react";

// import Logout from "../Logout";

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>Customer Management System</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setIsAdding(true)}>Add Customer</button>
      </div>
    </header>
  );
};

export default Header;
