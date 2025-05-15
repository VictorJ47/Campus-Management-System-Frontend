/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    // Fetch the campus based on ID from the route parameters
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <CampusView campus={this.props.campus} />
      </div>
    );
  }
}

// Map Redux state to props
const mapState = (state) => ({
  campus: state.campus,
});

// Map dispatchable thunk to props
const mapDispatch = (dispatch) => ({
  fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
});

export default connect(mapState, mapDispatch)(CampusContainer);
