import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';
import EditCampusView from '../views/EditCampusView';

const EditCampusContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector((state) => state.campus);
  const history = useHistory();

  const [campusData, setCampusData] = useState({
    name: '',
    address: '',
    description: '',
  });

  useEffect(() => {
    dispatch(fetchCampusThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (campus.id) {
      setCampusData({
        name: campus.name || '',
        address: campus.address || '',
        description: campus.description || '',
      });
    }
  }, [campus]);

  const handleChange = (event) => {
    setCampusData({
      ...campusData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(editCampusThunk({ id: campus.id, ...campusData }));
    history.push(`/campus/${id}`);
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
