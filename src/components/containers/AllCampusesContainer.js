/*==================================================
/src/components/containers\AllCampusesContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Import Thunks
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";

// Import View
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  // Fetch all campuses once the component is mounted
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // Render the view, passing data and delete handler as props
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

// Map Redux state to component props
const mapState = (state) => ({
  allCampuses: state.allCampuses,
});

// Map dispatchable thunk actions to props
const mapDispatch = (dispatch) => ({
  fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
});

// Prop validation
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

// Export the connected component
export default connect(mapState, mapDispatch)(AllCampusesContainer);

