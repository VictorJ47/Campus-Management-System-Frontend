// src/components/containers/AddCampusContainer.js
import React from "react";
import { useDispatch } from "react-redux";
import AddCampusView from "../views/AddCampusView";
import { addCampusThunk } from "../../store/thunks";

const AddCampusContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = (campusData) => {
    dispatch(addCampusThunk(campusData));
  };

  return <AddCampusView handleSubmit={handleSubmit} />;
};

export default AddCampusContainer;
