/*==================================================
This container component handles the logic for adding a new campus.
It manages form submission, dispatches Redux actions, handles errors,
and redirects the user to the newly created campus's page.

It connects to:
- AddCampusView (the presentational component)
- addCampusThunk (Redux thunk for posting data to backend)
==================================================*/

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddCampusView from "../views/AddCampusView";
import { addCampusThunk } from "../../store/thunks";

const AddCampusContainer = () => {
  const dispatch = useDispatch();        // Access to dispatch Redux actions
  const history = useHistory();          // Used to programmatically redirect
  const [error, setError] = useState(null);  // Local state for error handling

  // Form submission handler
  const handleSubmit = async (campusData) => {
    try {
      // Dispatch the thunk to add a campus
      const newCampus = await dispatch(addCampusThunk(campusData));

      // If campus is created successfully, redirect to its detail page
      if (newCampus && newCampus.id) {
        history.push(`/campus/${newCampus.id}`);
      } else {
        throw new Error("Campus creation failed");
      }
    } catch (err) {
      // Handle error and show feedback to user
      console.error("Failed to add campus:", err);
      setError("Failed to add campus. Please try again.");
    }
  };

  // Render the AddCampusView with props
  return <AddCampusView handleSubmit={handleSubmit} error={error} />;
};

export default AddCampusContainer;

