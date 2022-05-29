import React from "react";
import config from 'config';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./client/components/header.jsx";
import Footer from "./client/components/footer.jsx";
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import Home from "./client/components/home/index";
import Checkout from "./client/components/patients/checkout";
import BookingSuccess from "./client/components/patients/booking-success";
import AppUniversal from "./admin/app-universal";

const AppContainer = function (props) {
  if (props) {
    const url = props.location.pathname.split("/")[1];
    return (
      <Router basename={`${config.publicPath}`}>
        {
          url === "admin" ? (
            <div>
              <Switch>
                <Route path="/admin" component={AppUniversal} />
              </Switch>
            </div>
          ) :
            (
              <div>
                {/* { url === "homeslider1" && <Route render={(props)=> <TopHeader {...props}/>} />} */}
                <Route render={(props) => <Header {...props} />} />
                <Switch>

                  <Route path="/login" exact component={LoginContainer} />
                  <Route path="/register" exact component={Register} />
                  <Route path="(/|/home)" exact component={Home} />

                  <Route path="/patient/checkout" exact component={Checkout} />
                  <Route
                    path="/patient/booking-success"
                    exact
                    component={BookingSuccess}
                  />
                </Switch>
                <Route render={(props) => <Footer {...props} />} />
              </div>
            )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
