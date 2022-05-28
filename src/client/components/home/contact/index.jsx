import React, { Component } from "react";

class Contactus extends Component {
  render() {
    return (
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="map-view">
              <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31899.766338011956!2d30.053594017214817!3d-1.9655666082880732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-1.9883845!2d30.0683354!4m5!1s0x19dca57ab4ab7b39%3A0x68557a851cd5b392!2scentrika!3m2!1d-1.9422332!2d30.058235!5e0!3m2!1sen!2srw!4v1653512268282!5m2!1sen!2srw" ></iframe>
              </div>
            </div>
            <div className="col-md-5">
              <h2 className="section-title">Let's Contact Us</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <div className="loc-details">
                <ul>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <span>+(250) 788 606 765</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>kk 778ST, Rwanda, Kigali, Gikondo</span>
                  </li>
                </ul>
              </div>

              <h2 className="section-title mt-4">Working Hours</h2>
              <div className="loc-details">
                <ul className="mb-0">
                  <li className="d-flex justify-content-between">
                    <span>Monday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Tuesday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Wednesday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Thursday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Friday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Saturday</span>
                    <span>09:00 am to 05:00 pm</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contactus;
