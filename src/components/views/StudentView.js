/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from "react";

const StudentView = ({ student }) => {
  if (!student || !student.firstName || !student.lastName) {
    return <div>Loading student details...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        {student.firstName} {student.lastName}
      </h1>
      <p>Email: {student.email}</p>
      {student.campus ? (
        <p>Enrolled at: {student.campus.name}</p>
      ) : (
        <p>Not enrolled in any campus</p>
      )}
    </div>
  );
};

export default StudentView;

