import React, { Component } from "react";
import { Link } from "react-router-dom";
import IMG01 from "../../../assets/images/doctors/doctor-thumb-02.jpg";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.state,
    }

  }
  render() {
    return (
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Booking
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Booking</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <Link
                        to="/patient/doctor-profile"
                        className="booking-doc-img"
                      >
                        <img src={IMG01} alt="User" />
                      </Link>
                      <div className="booking-info">
                        <h4>
                          <Link to="/patient/doctor-profile">
                            {this.props.location.state.doctorFname}
                          </Link>
                        </h4>

                        <p className="text-muted mb-0">
                          <i className="fas fa-hotel"></i> {this.props.location.state.department} <br />
                          <i className="fas fa-clock"></i> {this.props.location.state.department} <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div></div>
                <div className="submit-section proceed-btn text-right">
                  <Link
                    to="/patient/checkout"
                    className="btn btn-primary submit-btn"
                  >
                    Proceed to Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Booking;
