
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
  },
}));

const EditCampusView = (props) => {
  const { campus, handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>Edit Campus</h1>

      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
            Edit Campus Information
          </Typography>
        </div>

        <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
          <input
            type="text"
            name="name"
            value={campus.name || ""}
            onChange={handleChange}
          />
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
          <input
            type="text"
            name="address"
            value={campus.address || ""}
            onChange={handleChange}
          />
          <br /><br />

          <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
          <textarea
            name="description"
            value={campus.description || ""}
            onChange={handleChange}
            rows="4"
            cols="40"
          />
          <br /><br />

          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
          <br /><br />
        </form>
      </div>
    </div>
  );
};

export default EditCampusView;
