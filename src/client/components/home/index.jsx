import React, { Component } from "react";
import HomeBanner from "./homebanner";
import Services from "./services";
import OurDoctor from "./ourdoctors";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <HomeBanner />
         <Services />
         <OurDoctor />
        {/* <OurClient />
        <Contactus /> */}
        </div>
      </div>
    );
  }
}
export default Home;
