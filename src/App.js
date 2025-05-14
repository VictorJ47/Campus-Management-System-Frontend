import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import AllCampusesContainer from "./components/containers/AllCampusesContainer";
import AllStudentsContainer from "./components/containers/AllStudentsContainer";
import SingleCampusContainer from "./components/containers/SingleCampusContainer";
import AddCampusContainer from "./components/containers/AddCampusContainer";
import NewStudentContainer from "./components/containers/NewStudentContainer"; 
import EditStudentContainer from "./components/containers/EditStudentContainer"; 

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllCampusesContainer} />
        <Route path="/campuses" component={AllCampusesContainer} />
        <Route path="/campus/:id" component={SingleCampusContainer} />
        <Route path="/students" component={AllStudentsContainer} />
        <Route path="/newcampus" component={AddCampusContainer} />
        <Route path="/newstudent" component={NewStudentContainer} />
        <Route path="/editstudent/:id" component={EditStudentContainer} /> 
      </Switch>
    </Router>
  );
}

export default App;


