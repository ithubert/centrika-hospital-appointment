import React from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Departments from "./components/departments";
import Profile from "./components/profile";
import Login from "./components/login";
import AddDoctor from './components/forms/adddoctor';
import AddDepartment from './components/forms/adddepartment';

const AppUniversal = function (props) {
  return (
    <Router basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/appointments" exact component={Appointments} />
          <Route path="/admin/doctors" exact component={Doctors} />
          <Route path="/admin/patients" exact component={Patients} />
          <Route path="/admin/departments" exact component={Departments} />
          <Route path="/admin/profile" exact component={Profile} />
          <Route path="/admin/adddoctor" exact component={AddDoctor} />
          <Route path="/admin/adddepartment" exact component={AddDepartment} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppUniversal;
