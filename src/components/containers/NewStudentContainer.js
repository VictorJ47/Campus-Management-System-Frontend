/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import NewStudentView from "../views/NewStudentView";
import { Redirect } from "react-router-dom";

class NewStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      campusId: "",
      redirect: false,
      redirectId: null,  // ID of the newly created student
    };
  }

  // Fetch campus list when component mounts
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // Update local state when form fields change
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Validate and submit form data
  handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = this.state.firstName.trim();
    const lastName = this.state.lastName.trim();
    const email = this.state.email.trim();

    if (!firstName || !lastName || !email) {
      alert("First name, last name, and email cannot be empty.");
      return;
    }

    const student = {
      firstName,
      lastName,
      email,
      campusId: this.state.campusId ? Number(this.state.campusId) : null,
    };

    try {
      const newStudent = await this.props.addStudent(student);
      if (!newStudent || !newStudent.id) {
        throw new Error("No student returned from server");
      }

      // Redirect to single student view
      this.setState({
        redirect: true,
        redirectId: newStudent.id,
      });
    } catch (error) {
      console.error("Failed to add student:", error);
      alert("Failed to add student. Please check your input and try again.");
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }

    return (
      <NewStudentView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        campusId={this.state.campusId}
        campuses={this.props.allCampuses}
      />
    );
  }
}

// Get campus list from Redux state
const mapState = (state) => ({
  allCampuses: state.allCampuses,
});

// Map thunks to props
const mapDispatch = (dispatch) => ({
  addStudent: (student) => dispatch(addStudentThunk(student)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
});

export default connect(mapState, mapDispatch)(NewStudentContainer);

