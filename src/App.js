import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllCampusesContainer from "./components/containers/AllCampusesContainer";
import AllStudentsContainer from "./components/containers/AllStudentsContainer";
import SingleCampusContainer from "./components/containers/SingleCampusContainer";
import AddCampusContainer from "./components/containers/AddCampusContainer"; // ✅ Make sure this is imported

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllCampusesContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/campus/:id" element={<SingleCampusContainer />} />
        <Route path="/students" element={<AllStudentsContainer />} />
        <Route path="/newcampus" element={<AddCampusContainer />} /> {/* ✅ New Route */}
      </Routes>
    </Router>
  );
}

export default App;

