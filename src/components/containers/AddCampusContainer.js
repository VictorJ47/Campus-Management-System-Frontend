// src/components/containers/AddCampusContainer.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddCampusView from "../views/AddCampusView";
import { addCampusThunk } from "../../store/thunks";

const AddCampusContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleSubmit = async (campusData) => {
    try {
      const newCampus = await dispatch(addCampusThunk(campusData));
      if (newCampus && newCampus.id) {
        history.push(`/campus/${newCampus.id}`);
      } else {
        throw new Error("Campus creation failed");
      }
    } catch (err) {
      console.error("Failed to add campus:", err);
      setError("Failed to add campus. Please try again.");
    }
  };

  return <AddCampusView handleSubmit={handleSubmit} error={error} />;
};

export default AddCampusContainer;
