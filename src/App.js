import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllCampusesContainer from "./components/containers/AllCampusesContainer";
import AllStudentsContainer from "./components/containers/AllStudentsContainer";
import SingleCampusContainer from "./components/containers/SingleCampusContainer";
import AddCampusContainer from "./components/containers/AddCampusContainer";
import NewStudentContainer from "./components/containers/NewStudentContainer"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllCampusesContainer />} />
        <Route path="/campuses" element={<AllCampusesContainer />} />
        <Route path="/campus/:id" element={<SingleCampusContainer />} />
        <Route path="/students" element={<AllStudentsContainer />} />
        <Route path="/newcampus" element={<AddCampusContainer />} />
        <Route path="/newstudent" element={<NewStudentContainer />} />
      </Routes>
    </Router>
  );
}

export default App;

