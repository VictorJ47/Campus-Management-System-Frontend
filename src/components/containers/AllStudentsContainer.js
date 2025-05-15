/*==================================================
AllStudentsContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { fetchAllStudentsThunk, deleteStudentThunk } from '../../store/thunks';
import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <AllStudentsView 
          students={this.props.allStudents}
          deleteStudent={this.props.deleteStudent}   
        />
      </div>
    );
  }
}

// Map Redux state to component props
const mapState = (state) => ({
  allStudents: state.allStudents,
});

// Map dispatchable thunk actions to props
const mapDispatch = (dispatch) => ({
  fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
  deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
});

export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));
