/*==================================================
AllStudentsView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  // If there are no students, display a message
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`/newstudent`}>
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
        const fullName = `${student.firstname} ${student.lastname}`;

        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{fullName}</h2>
            </Link>
            
            {/* Student Image */}
            <img
              src={student.imageUrl || "https://via.placeholder.com/150"}  // Default image if no imageUrl
              alt={fullName}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
            />
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            <hr />
          </div>
        );
      })}

      <br />
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br /><br />
    </div>
  );
};

export default AllStudentsView;
