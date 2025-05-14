
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
      firstname: '',
      lastname: '',
      campusId: null,
      redirect: false,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const student = await this.props.fetchStudent(id);

    this.setState({
      firstname: student.firstname || '',
      lastname: student.lastname || '',
      campusId: student.campusId || null,
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
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      campusId: this.state.campusId,
    };

    await this.props.editStudent(updatedStudent);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.props.match.params.id}`} />;
    }

    const student = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
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
