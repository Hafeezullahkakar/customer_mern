import React from "react";

const Table = ({ employees, handleEdit, handleDelete }) => {
  // console.log("id in employes: ", employees);
  return (
    <div className="contain-table" style={{width:'90%', display:'flex', justifyContent:'center', alignItems:"center"}}>
      <table className="striped-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee._id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee._id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Customers</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
