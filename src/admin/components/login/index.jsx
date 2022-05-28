import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import Logo from '../../assets/images/logo-white.png';
import * as Constants from '../config';

class Login extends Component {


	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			response: "",
			statusCode: false,
			message: ""
		}

	}

	handleInputChanged(event) {
		this.setState({
			email: event.target.value,
			password: event.target.value,
		});
	}


	HandleLogin = async (event) => {

		event.preventDefault();

		var email = this.state.email;
		var password = this.state.password;
		let statusCode = false;
		let code = null;
		let message = null;
		let data = null;
		let adminId = null


		var formdata = new FormData();
		formdata.append("admin_email", email);
		formdata.append("admin_password", password);


		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow'
		};

		const url = Constants.APIURL;

		var formdata = new FormData();
		formdata.append("admin_email", email);
		formdata.append("admin_password", password);

		var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow'
		};

		await fetch(url + "/admin/login", requestOptions)
			.then(function (response) {
				return response.json();

			})
			.then(function (json) {
				console.log(json);
				code = json.code;
				message = json.message;
				data = json.data;
				adminId = data["admin_id"]
			});


		if (code === 200) {
			this.setState({ statusCode: true }, () => {
				console.log(this.state.statusCode);

				Cookies.set('adminId', adminId);
			})
			this.setState({ message: message });


		} else {

			this.setState({ message: message }, () => {
				console.log(this.state.message);
			})
		}

	}

	render() {

		const { statusCode, message } = this.state;
		const adminId = Cookies.get('adminId');

		if (statusCode === true) {
			return <Redirect to="/admin" />
		}

		if (adminId >= 0) {
			return <Redirect to="/admin" />
		}


		return (
			<div>
				<div className="main-wrapper login-body">
					<div className="login-wrapper">
						<div className="container">
							<div className="loginbox">
								<div className="login-left">
									<img className="img-fluid" src={Logo} alt="Logo" />
								</div>
								<div className="login-right">
									<div className="login-right-wrap">
										<div id='response'>{message}</div> <br />
										<h1>Login</h1>
										<p className="account-subtitle">Access to your account</p>


										<form>
											<div className="form-group">
												<input className="form-control" type="text" placeholder="Email" onChange={event => this.setState({ email: event.target.value })} />
											</div>
											<div className="form-group">
												<input className="form-control" type="text" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
											</div>
											<div className="form-group">
												<button className="btn btn-primary btn-block" type="button" onClick={this.HandleLogin.bind(this)}>Login</button>
											</div>
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

export default Login;