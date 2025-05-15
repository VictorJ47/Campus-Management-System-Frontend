/*==================================================
EditStudentContainer.js

This container component is responsible for:
- Fetching the student data and all campuses on mount
- Managing local state for the edit form
- Submitting the edited student data
- Redirecting to the student detail page upon successful update
==================================================*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchStudentThunk,
  editStudentThunk,
  fetchAllCampusesThunk
} from '../../store/thunks';
import EditStudentView from '../views/EditStudentView';
import { Redirect } from 'react-router-dom';

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      campusId: '',
      redirect: false,
      loaded: false, // Used to determine when student data has loaded
    };
  }

  // Fetch student and campus data on mount
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.fetchStudent(id);           // Get student data
    await this.props.fetchAllCampuses();         // Get list of campuses

    const { student } = this.props;

    // Populate local state with student details
    this.setState({
      firstName: student.firstName || '',
      lastName: student.lastName || '',
      email: student.email || '',
      campusId: student.campusId ? String(student.campusId) : '',
      loaded: true,
    });
  }

  // Update local state when input fields change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Submit the updated student data
  handleSubmit = async (event) => {
    event.preventDefault();

    const updatedStudent = {
      id: this.props.match.params.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      campusId: this.state.campusId ? Number(this.state.campusId) : null,
    };

    await this.props.editStudent(updatedStudent);
    this.setState({ redirect: true });
  };

  render() {
    // Redirect to single student view after successful submission
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.props.match.params.id}`} />;
    }

    // Show loading message until data is ready
    if (!this.state.loaded) return <div>Loading...</div>;

    return (
      <EditStudentView
        student={this.state}
        campuses={this.props.allCampuses}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

// Map Redux state to component props
const mapState = (state) => ({
  student: state.student,
  allCampuses: state.allCampuses,
});

// Map Redux actions to component props
const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);

