import React from "react";
import { Link } from "react-router-dom";

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
        <p>
          Enrolled at:{" "}
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        </p>
      ) : (
        <p>Not enrolled in any campus</p>
      )}

      <img
        src={student.imageUrl || "https://via.placeholder.com/150"}
        alt={`${student.firstName} ${student.lastName}`}
        style={{ width: "200px", borderRadius: "10px", marginTop: "15px" }}
      />
    </div>
  );
};

export default StudentView;


