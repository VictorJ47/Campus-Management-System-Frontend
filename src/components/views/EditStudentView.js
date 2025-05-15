import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '10px',
  },
  selectInput: {
    padding: '5px',
    fontSize: '1rem',
  },
}));

const EditStudentView = ({ student, campuses, handleChange, handleSubmit }) => {
  const classes = useStyles();

  return (
    <div>
      <h1>Edit Student</h1>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography
            style={{
              fontWeight: 'bold',
              fontFamily: 'Courier, sans-serif',
              fontSize: '20px',
              color: '#11153e',
            }}
          >
            Edit Student Information
          </Typography>
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
            <input
              type="text"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <br />

          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <br />

          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />

          <div>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus: </label>
            <select
              name="campusId"
              value={student.campusId || ''}
              onChange={handleChange}
              className={classes.selectInput}
            >
              <option value="">-- Select Campus --</option>
              {campuses &&
                campuses.map((campus) => (
                  <option key={campus.id} value={campus.id}>
                    {campus.name}
                  </option>
                ))}
            </select>
          </div>
          <br />

          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;


