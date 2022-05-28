import React, { Component } from "react";
import banner from "../../../assets/images/banner-video.png";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      play: 0,
    };
  }

  handlePlayVideo = () => {
    this.setState({ play: 1 });
  };

  render() {
    const opts = {
      playerVars: {
        autoplay: this.state.play,
      },
    };
    return (
      <section className="section home-banner">
        <div className="container-fluid">
          <div className="row banner-wrapper">
            <div className="col-md-5">
              <div className="banner-header">
                <h1>Centrika Hospital Appointment booking!</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                
                  <button className="btn btn-primary mt-4">
                    Make an Appointment
                  </button>
              </div>
              <a href="#0" className="see-doc">
                See Our Doctors <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>

            <div className="col-md-7">
              <div>
            
                <>
                    <img src={banner} alt=".." className="img-fluid w-100" />
                    <span className="play-btn">
                      <i className="fas fa-play"></i>
                    </span>
                  </>
              </div>
              <div className="media">
                <i className="fas fa-calendar-check"></i>
                <div className="media-body">
                  <h5 className="mt-0">Opening Hours</h5>
                  <p>Mon - Fri : 09.00 AM to 05.00 PM </p>
                  <p>Closed on Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomeBanner;
