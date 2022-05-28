import React, { Component } from "react";
import { Link , Redirect} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logoicon from "../../assets/images/logo-small.png";
import avatar from "../../assets/images/doctors/doctor-thumb-01.png";
import Dropdown from "react-bootstrap/Dropdown";
import $ from "jquery";
import config from "config";
import Cookies from 'js-cookie'

class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    
    $('#toggle_btn').on('click', function (e) {
      $('body').toggleClass('downtown');
    });


    if (this.props.location.pathname.split("/")[1] === 'admin') {
      require('../../assets/plugins/bootstrap-rtl/css/bootstrap.min.css')
      require('../..//assets/css/feathericon.min.css')
      require('../../assets/js/app.js');
      require('../../assets/js/jquery-3.2.1.min.js');
      require('../../assets/js/jquery.slimscroll.min.js');
      require('../../assets/plugins/fontawesome/css/fontawesome.min.css')
      require('../../assets/plugins/fontawesome/css/all.min.css')
      require('../../assets/css/font-awesome.min.css')
      require('../../assets/css/style.css')
    }

  }


  render() {
    const exclusionArray = [
      "/admin/login",
    ];
    if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
      return "";
    }
    var adminId = null;
    adminId = Cookies.get('adminId');

    if (adminId == undefined ) {
			return <Redirect to="/admin/login" />
		}


    return (
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to="/admin" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/admin" className="logo logo-small">
            <img src={logoicon} alt="Logo" width="30" height="30" />
          </Link>
        </div>
        {/* /Logo */}
        <a href="#0" id="toggle_btn" onClick={this.handlesidebar}>
          <i className="fe fe-text-align-left" />
        </a>
        <div className="top-nav-search">
          <form>
            <input type="text" className="form-control" placeholder="Search here" />
            <button className="btn" type="submit"><i className="fa fa-search" /></button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a href="#0" className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
        {/* /Mobile Menu Toggle */}

        <ul className="nav user-menu">
          <li className="nav-item dropdown noti-dropdown">
            

          </li>

          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="user-img">
                  <img
                    className="rounded-circle"
                    src={avatar}
                    width="31"
                  />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" className="no-padding">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={avatar}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>Hubert IT</h6>
                      <p className="text-muted mb-0">Administrator</p>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href={`${config.publicPath}/admin/login`}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
