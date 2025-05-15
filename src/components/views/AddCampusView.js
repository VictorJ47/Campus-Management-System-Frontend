/*==================================================
AddCampusView.js

This view component renders the form for adding a new campus.
It includes fields for name, address, description, and an optional image URL.

Props:
- handleSubmit: Function passed from the container to handle form submission
==================================================*/

import React, { useState } from "react";

const AddCampusView = ({ handleSubmit }) => {
  // Local state for form input fields
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: ""
  });

  // Update form state when any input changes
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData); // Call the container's submit handler
    // Optionally reset form after submission
    setFormData({ name: "", address: "", description: "", imageUrl: "" });
  };

  return (
    <div>
      <h2>Add New Campus</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label><br />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label><br />
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Campus</button>
      </form>
    </div>
  );
};

export default AddCampusView;
