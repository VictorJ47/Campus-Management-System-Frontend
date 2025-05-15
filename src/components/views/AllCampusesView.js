/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */


import React from "react";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses, deleteCampus }) => {
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

  return (
    <div>
      <h1>All Campuses</h1>
      {allCampuses.map((campus) => (
        <div key={campus.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "15px" }}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
            <img
              src={campus.imageUrl || "https://via.placeholder.com/150"}
              alt={campus.name}
              style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
          </Link>
          <br />
          <Link to={`/editcampus/${campus.id}`}>
            <button>Edit</button>
          </Link>{" "}
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
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
