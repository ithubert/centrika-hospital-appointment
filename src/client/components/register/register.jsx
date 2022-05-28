import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import * as Constants from '../config';


class Register extends Component {
  componentDidMount() {
    document.body.classList.add("account-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("account-page");
  }

  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      phone: "",
      email: "",
      password: "",

    }
  }

  handleInputChanged(event) {
    this.setState({
      fname: event.target.value,
      lname: event.target.value,
      phone: event.target.value,
      email: event.target.value,
      password: event.target.value,
    });
  }

  HandleRegister() {
    var fname = this.state.fname;
    var lname = this.state.lname;
    var phone = this.state.phone;
    var email = this.state.email;
    var password = this.state.password;


    var formdata = new FormData();
    formdata.append("patient_fname", fname);
    formdata.append("patient_lname", lname);
    formdata.append("patient_phone", phone);
    formdata.append("patient_email", email);
    formdata.append("patient_password", password);

 
    alert(fname);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const url = Constants.APIURL;

    fetch(url+"/patient/register", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  render() {

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Centrika Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Registration{" "}

                      </h3>
                    </div>

                    <form action="">
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={event => this.setState({ fname: event.target.value })}
                        />
                        <label className="focus-label" htmlFor="name">
                          First Name
                        </label>
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={event => this.setState({ lname: event.target.value })}
                        />
                        <label className="focus-label" htmlFor="lname">
                          Last Name
                        </label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={event => this.setState({ phone: event.target.value })}
                        />
                        <label className="focus-label" htmlFor="mobile">
                          Mobile Number
                        </label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          onChange={event => this.setState({ email: event.target.value })}
                        />
                        <label className="focus-label" htmlFor="mobile">
                          Email
                        </label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          onChange={event => this.setState({ password: event.target.value })}
                        />
                        <label className="focus-label" htmlFor="password">
                          Create Password
                        </label>
                      </div>
                      <div className="terms-and-policy pt-2 pb-2">
                        <input
                          type="checkbox"
                          required
                          name="checkbox"
                          value="check"
                          id="agree"
                        />
                        <span className="agree">
                          I agree to these{" "}
                          <span className="terms">
                            <Link to="#" target="_blank">
                              Terms of Use
                            </Link>{" "}
                            and{" "}
                            <Link to="#" target="_blank">
                              Privacy Policy
                            </Link>
                          </span>
                        </span>
                      </div>
                      <div className="text-right">
                        <Link to="/login" className="forgot-link">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn" type="button" onClick={this.HandleRegister.bind(this)}>  CREATE ACCOUNT </button>

                    </form>
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

export default Register;
