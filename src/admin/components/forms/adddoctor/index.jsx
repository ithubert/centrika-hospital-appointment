import React, { Component } from 'react';
import SidebarNav from '../../sidebar';
import * as Constants from '../../config';
class AddDoctor extends Component {


	constructor(props) {
		super(props);

		this.state = {
			fname: "",
			lname: "",
			department: "",
			email: "",
			password: "",
			statusCode: false,
			alert: "",
			message: "",
			departments: [],
		}

	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};
		fetch(Constants.APIURL + "/admin/departments", requestOptions)
			.then(function (response) {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({
					departments: json.data
				})
			});
	}


	handleInputChanged(event) {
		this.setState({
			fname: event.target.value,
			lname: event.target.value,
			email: event.target.value,
			phone: event.target.value,
			department: event.target.value,
		});
	}


	AddDoctor = async (event) => {

		event.preventDefault();

		var fname = this.state.fname;
		var lname = this.state.lname;
		var email = this.state.email;
		var phone = this.state.phone;
		var department = this.state.department;

		let code = null;
		let message = null;
		let data = null;
		let adminId = null

		if (fname === "" || lname === "" || email === "" || phone === "") {
			this.setState({ department: "", alert: "alert alert-danger" });
			this.setState({ message: "All fields are required" });
		} else {

			const url = Constants.APIURL;

			var formdata = new FormData();
			formdata.append("doctor_fname", fname);
			formdata.append("doctor_lname", lname);
			formdata.append("doctor_phone", phone);
			formdata.append("doctor_email", email);
			formdata.append("department_id", department);

			var requestOptions = {
				method: 'POST',
				body: formdata,
				redirect: 'follow'
			};

			await fetch(url + "/admin/addDoctor", requestOptions)
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

				})

				this.setState({ message: message, alert: "alert alert-success" });

			} else {

				this.setState({ message: message, alert: "alert alert-danger" }, () => {
					console.log(this.state.message);
				})
			}

			// reset values

			this.setState({ fname: "", lname: "", phone: "", email: "", department: "" });

		}

	}

	render() {
		const { message, fname, lname, phone, email, alert } = this.state;
		return (
			<>
				<SidebarNav />
				<div className="page-wrapper">
					<div className="content container-fluid">
						<div className="page-header">
							<div className="row">
								<div className="col">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><a href="/admin">Doctors</a></li>
										<li className="breadcrumb-item active">Registration </li>

									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className={alert}>{message}</div>
								<div className="card">
									<div className="card-header">
										<h4 className="card-title">Doctor's Information </h4>
									</div>
									<div className="card-body">
										<form>
											<div className="form-group row">
												<label className="col-form-label col-md-2">First Name</label>
												<div className="col-md-10">
													<input type="text" className="form-control" onChange={event => this.setState({ fname: event.target.value })} value={fname} />
												</div>
											</div>
											<div className="form-group row">
												<label className="col-form-label col-md-2">Last Name</label>
												<div className="col-md-10">
													<input type="text" className="form-control" onChange={event => this.setState({ lname: event.target.value })} value={lname} />
												</div>
											</div>

											<div className="form-group row">
												<label className="col-form-label col-md-2">Email</label>
												<div className="col-md-10">
													<input type="text" className="form-control" onChange={event => this.setState({ email: event.target.value })} value={email} />
												</div>
											</div>

											<div className="form-group row">
												<label className="col-form-label col-md-2">Telephone</label>
												<div className="col-md-10">
													<input type="text" className="form-control" onChange={event => this.setState({ phone: event.target.value })} value={phone} />
												</div>
											</div>


											<div className="form-group row">
												<label className="col-form-label col-md-2">Department</label>
												<div className="col-md-10">
													<select className="form-control" onChange={event => this.setState({ department: event.target.value })}>
														<option>-- Select --</option>
														{
															this.state.departments.map(v => <option value={v.department_id}>{v.department_name}</option>)
														}
													</select>
												</div>
											</div>

											<button className='btn btn-info float-right' onClick={this.AddDoctor.bind(this)}>Add Doctor</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AddDoctor;