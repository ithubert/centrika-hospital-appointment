import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = (props) => {
  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer-about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-facebook-f"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-google-plus-g"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#0" target="_blank">
                          <i className="fab fa-twitter"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Footer Menu</h2>
                <ul>
                <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Footer Menu</h2>
                <ul>
                <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-3">
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Footer Menu</h2>
                <ul>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                  <li>
                    <Link to="#">Link</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="download-app">
            <ul>
              <li>
                <p>@ Centrika 2022, All rights reserved </p>
              </li>
            
            
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
