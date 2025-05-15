import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk, editStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';
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
      loaded: false,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.fetchStudent(id);
    await this.props.fetchAllCampuses();

    const { student } = this.props;

    this.setState({
      firstName: student.firstName || '',
      lastName: student.lastName || '',
      email: student.email || '',
      campusId: student.campusId ? String(student.campusId) : '',
      loaded: true,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.props.match.params.id}`} />;
    }

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

const mapState = (state) => ({
  student: state.student,
  allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);
