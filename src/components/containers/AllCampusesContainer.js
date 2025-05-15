/*==================================================
/src/components/containers\AllCampusesContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
        <AllCampusesView
          allCampuses={this.props.allCampuses}
          deleteCampus={this.props.deleteCampus}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  allCampuses: state.allCampuses,
});

const mapDispatch = (dispatch) => ({
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
});

AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllCampusesContainer);
