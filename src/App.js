import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/containers/Header";

import AllCampusesContainer from "./components/containers/AllCampusesContainer";
import AllStudentsContainer from "./components/containers/AllStudentsContainer";
import CampusContainer from "./components/containers/CampusContainer";
import StudentContainer from "./components/containers/StudentContainer";
import NewStudentContainer from "./components/containers/NewStudentContainer";
import AddCampusContainer from "./components/containers/AddCampusContainer";
import HomePageView from "./components/views/HomePageView";

function App() {
  return (
    <Router>
      <Header /> {/* Renders once on every page */}
      <Switch>
        <Route exact path="/" component={HomePageView} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/newcampus" component={AddCampusContainer} />
      </Switch>
    </Router>
  );
}

export default App;



