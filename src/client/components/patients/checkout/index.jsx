import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as Constants from '../../config';

import IMG01 from "../../../assets/images/patients/patient.png";

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.location.state,
      doctorId: this.props.location.state.doctorId,
      fname: "",
      lname: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      statusCode: false,
      response: ""
    }

  }

  handleInputChanged(event) {
    this.setState({
      fname: event.target.value,
      lname: event.target.value,
      email: event.target.value,
      phone: event.target.value,
      date: event.target.value,
      time: event.target.value,
      doctorId: this.props.location.state.doctorId,
    });
  }

  handleChange = async (event) => {

    event.preventDefault();

    var doctorId = this.props.location.state.doctorId;
    var fname = this.state.fname;
    var lname = this.state.lname;
    var email = this.state.email;
    var phone = this.state.phone;
    var date = this.state.date;
    var time = this.state.time;
    let code = null;
    var message = null;
    var data = null;


    if (fname === "" || lname === "" || email === "" || phone === "" || date === "" || time === "") {
      this.setState({ response: "All fields are required, kindly fill all information!" });

    } else {

      const url = Constants.APIURL;

      var formdata = new FormData();
      formdata.append("patient_fname", fname);
      formdata.append("patient_lname", lname);
      formdata.append("patient_email", email);
      formdata.append("patient_phone", phone);
      formdata.append("doctor_id", doctorId);
      formdata.append("date", date);
      formdata.append("time", time);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };



      await fetch(url + "/patient/book", requestOptions)

        .then(function (response) {
          return response.json();

        })
        .then(function (json) {

          //console.log(json);
          code = json.code;
          message = json.message;
          data = json.data;
        });

      console.log(code);

      this.setState({ response: message, statusCode: code }, () => {
        console.log(this.state.response);

      })

    }

  };

  render() {

    const { response, statusCode } = this.state;

    if (statusCode === 200) {
      return <Redirect to='/patient/booking-success' />
    }

    return (
      <div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">

                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="info-widget">

                        <span className="text-danger">{response}</span> <br />

                        <div className="payment-widget">
                          <h4 className="card-title">Date and Time</h4>

                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group card-label">
                                <label>Date</label>
                                <input className="form-control" type="date" onChange={event => this.setState({ date: event.target.value })} />
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <div className="form-group card-label">
                                <label>Last Name</label>
                                <input className="form-control" type="time" onChange={event => this.setState({ time: event.target.value })} />
                              </div>
                            </div>
                          </div>

                        </div>

                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>First Name</label>
                              <input className="form-control" type="text" onChange={event => this.setState({ fname: event.target.value })} />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Last Name</label>
                              <input className="form-control" type="text" onChange={event => this.setState({ lname: event.target.value })} />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Email</label>
                              <input className="form-control" type="email" onChange={event => this.setState({ email: event.target.value })} />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Phone</label>
                              <input className="form-control" type="text" onChange={event => this.setState({ phone: event.target.value })} />
                            </div>
                          </div>
                        </div>
                        <div className="exist-customer">
                          Existing Customer?
                          <Link to="/login">
                            Click here to login
                          </Link>
                        </div>

                      </div>
                      <div className="submit-section mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary submit-btn"
                          onClick={this.handleChange.bind(this)}
                        >
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 theiaStickySidebar">
                <div className="card booking-card">
                  <div className="card-header">
                    <h4 className="card-title">Booking Summary</h4>
                  </div>
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

                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i> {this.props.location.state.department}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="booking-summary mt-3">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Date: <span>{this.state.date}</span>
                          </li>
                          <li>
                            Time: <span>{this.state.time}</span>
                          </li>
                        </ul>

                        <div className="booking-total">
                          <ul className="booking-total-list">
                            <li>
                              <span>Currently</span>
                              <span className="total-cost">{this.props.location.state.department}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Checkout;
