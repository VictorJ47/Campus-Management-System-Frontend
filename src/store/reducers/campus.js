/*==================================================
/src/store/reducers/campus.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import { FETCH_CAMPUS, UPDATE_CAMPUS } from "../actions/actionTypes";  // Import Action Types

// Define default Initial State
const initialState = {
  students: [],  // Empty students array
};

// REDUCER:
const campus = (state = initialState, action) => {  // Use "initialState" as default Initial State
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;

    case UPDATE_CAMPUS:
      return action.payload;  // Replace current state with updated campus object

    default:
      // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
      return state;
  }
};

export default campus;
