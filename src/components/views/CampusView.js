/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

const CampusView = ({ campus }) => {
  if (!campus || !campus.id) {
    return <div>Loading campus details...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{campus.name}</h1>
      <p><strong>Address:</strong> {campus.address}</p>
      <p><strong>Description:</strong> {campus.description}</p>

      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>

      <h2>Enrolled Students</h2>
      {campus.students && campus.students.length ? (
        campus.students.map((student) => {
          const name = `${student.firstName} ${student.lastName}`;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <p>{name}</p>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No students enrolled at this campus.</p>
      )}
    </div>
  );
};

export default CampusView;


