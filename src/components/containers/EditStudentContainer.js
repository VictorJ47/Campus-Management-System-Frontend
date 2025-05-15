import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';
import EditStudentView from '../views/EditStudentView';
import Header from './Header';
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
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.fetchStudent(id);
    const { student } = this.props;

    if (student) {
      this.setState({
        firstName: student.firstName || '',
        lastName: student.lastName || '',
        email: student.email || '',
        campusId: student.campusId || '',
      });
    }
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

    const student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      campusId: this.state.campusId,
    };

    return (
      <div>
        <Header />
        <EditStudentView
          student={student}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);

