/*==================================================
AllCampusesView.js

The Views component is responsible for rendering the web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses view page.
==================================================*/

import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses } = props;

  // If there are no campuses, display a message
  if (!allCampuses.length) {
    return (
      <div>
        <h1>All Campuses</h1>
        <p>There are no campuses.</p>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
      </div>
    );
  }

  // If there is at least one campus, render All Campuses view
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id} style={{ marginBottom: "30px" }}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <img
            src={campus.imageUrl || "https://via.placeholder.com/150"}
            alt={campus.name}
            style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <p><strong>Address:</strong> {campus.address}</p>
          <p><strong>Description:</strong> {campus.description}</p>
          <hr />
        </div>
      ))}

      <br />
      <Link to="/newcampus">
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

export default AllCampusesView;
