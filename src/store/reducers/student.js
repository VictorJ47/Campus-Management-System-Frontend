/*==================================================
/src/store/reducers/student.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import { FETCH_STUDENT, EDIT_STUDENT } from "../actions/actionTypes";

const initialState = {
  campus: {},
};

const student = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case EDIT_STUDENT:
      return action.payload; 
    default:
      return state;
  }
};

export default student;

