import React, { Component } from "react";
import { Link } from "react-router-dom";
class BookingSuccess extends Component {
  render() {
    return (
      <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check"></i>
                    <h3>Appointment booked Successfully!</h3>
                    <p>
                      We will confirm and get back to you soon
                    </p>
                    <Link
                      to="../"
                      className="btn btn-primary view-inv-btn"
                    >
                      Back Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingSuccess;
