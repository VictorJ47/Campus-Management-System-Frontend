/*==================================================
EditCampusContainer.js

This container component is responsible for:
- Fetching a single campus by ID when the component mounts
- Managing local state for the edit form
- Submitting updated campus data to the backend
- Redirecting to the updated campus's page after submission
==================================================*/

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';

const EditCampusContainer = () => {
  const { id } = useParams();                // Extract campus ID from URL
  const dispatch = useDispatch();           // Redux dispatch function
  const history = useHistory();             // React Router navigation
  const campus = useSelector((state) => state.campus);  // Get campus from Redux store

  // Local state for form data
  const [campusData, setCampusData] = useState({
    name: '',
    address: '',
    description: '',
  });

  // Fetch campus data when component mounts
  useEffect(() => {
    dispatch(fetchCampusThunk(id));
  }, [dispatch, id]);

  // Update local state when Redux campus data is loaded
  useEffect(() => {
    if (campus.id) {
      setCampusData({
        name: campus.name || '',
        address: campus.address || '',
        description: campus.description || '',
      });
    }
  }, [campus]);

  // Handle form field changes
  const handleChange = (event) => {
    setCampusData({
      ...campusData,
      [event.target.name]: event.target.value,
    });
  };

  // Submit updated campus data
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(editCampusThunk({ id: campus.id, ...campusData }));
    history.push(`/campus/${id}`); // Redirect to the updated campus page
  };

  return (
    <EditCampusView
      campus={campusData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditCampusContainer;

