import React, { useState } from "react";
import "./App.css";
function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");

  const addEmployee = () => {
    if (name) setEmployees([...employees, { name, status: "Absent" }]);
    setName("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Employee Attendance</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Employee Name"
      />
      <button onClick={addEmployee}>Add</button>

      {employees.map((emp, i) => (
        <div key={i}>
          {emp.name} - {emp.status}

          <button
            onClick={() =>
              setEmployees(
                employees.map((e, j) => (i === j ? { ...e, status: "Present" } : e))
              )
            }
          >
            Mark Present
          </button>

          <button onClick={() => setEmployees(employees.filter((_, j) => j !== i))}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default App