import React, { Component } from 'react';
import SidebarNav from '../../sidebar';
import * as Constants from '../../config';
class AddDepartment extends Component {


	constructor(props) {
		super(props);

		this.state = {
			department: "",
			statusCode: false,
			message: ""
		}

	}

	handleInputChanged(event) {
		this.setState({
			department: event.target.value,
		});
	}


	AddDepartment = async (event) => {

		event.preventDefault();

		var department = this.state.department;

		let code = null;
		let message = null;
		let data = null;

		if (department === "") {
			this.setState({ message: "Department can't be empty" });
		} else {

			const url = Constants.APIURL;

			var formdata = new FormData();
			formdata.append("department", department);

			var requestOptions = {
				method: 'POST',
				body: formdata,
				redirect: 'follow'
			};

			await fetch(url + "/admin/addDepartment", requestOptions)
				.then(function (response) {
					return response.json();

				})
				.then(function (json) {
					console.log(json);
					code = json.code;
					message = json.message;
				});


			if (code === 200) {
				this.setState({ statusCode: true }, () => {
					console.log(this.state.statusCode);

				})
				this.setState({ message: message });


			} else {

				this.setState({ message: message }, () => {
					console.log(this.state.message);
				})
			}

		}

	}

	render() {

		const { statusCode, message } = this.state;

		return (
			<>
				<SidebarNav />

				<div className="page-wrapper">
					<div className="content container-fluid">
						<div className="page-header">
							<div className="row">
								<div className="col">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><a href="/admin">Departments</a></li>
										<li className="breadcrumb-item active">Registration </li>

									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
									<div className="card-header">
										<h4 className="card-title">Department's Information </h4>
										<span className='float-right text-info'>{message}</span>
									</div>
									<div className="card-body">
										<form>
											<div className="form-group row">
												<label className="col-form-label col-md-3">Department Name</label>
												<div className="col-md-9">
													<input type="text" className="form-control" onChange={event => this.setState({ department: event.target.value })} />
												</div>
											</div>
											<button className='btn btn-info float-right' onClick={this.AddDepartment.bind(this)}>Add Department</button>
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

export default AddDepartment;