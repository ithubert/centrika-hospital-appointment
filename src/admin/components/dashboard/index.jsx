import React, { Component } from 'react';
import SidebarNav from '../sidebar';
import TableDoctor from './tableDoctor';
import TablePatientsList from './tablePatientList';
import TableAppointmentList from './appointment';
import * as Constants from '../config';


class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {

			homeData: [],
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

		fetch(Constants.APIURL + "/admin/home", requestOptions)
			.then(function (response) {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({
					homeData: json.data
				})
			});
	}

	render() {

		const { homeData } = this.state;

		return (


			<>
				<SidebarNav />
				<div className="page-wrapper">
					<div className="content container-fluid">
						<div className="page-header">
							<div className="row">
								<div className="col-sm-12">
									<h3 className="page-title" onClick={this.handleClick} >Welcome Hubert IT!</h3>
									<ul className="breadcrumb">
										<li className="breadcrumb-item active">Dashboard</li>
									</ul>
								</div>
							</div>
						</div>

						{/* breadcrumb */}

						<div className="row">
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon text-primary border-primary">
												<i className="fe fe-users"></i>
											</span>
											<div className="dash-count">
												<h3>{homeData["doctors"]}</h3>
											</div>
										</div>
										<div className="dash-widget-info">
											<h6 className="text-muted">Doctors</h6>
											<div className="progress progress-sm">
												<div className="progress-bar bg-primary w-50"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										

										<div className="dash-widget-header">
											<span className="dash-widget-icon text-success">
												<i className="fe fe-users"></i>
											</span>
											<div className="dash-count">
												<h3>{homeData["patients"]}</h3>
											</div>
										</div>
										<div className="dash-widget-info">

											<h6 className="text-muted">Patients</h6>
											<div className="progress progress-sm">
												<div className="progress-bar bg-success w-50"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon text-danger border-danger">
												<i className="fe fe-calendar"></i>
											</span>
											<div className="dash-count">
												<h3>{homeData["appointments"]}</h3>
											</div>
										</div>
										<div className="dash-widget-info">
											<h6 className="text-muted">Requests</h6>
											<div className="progress progress-sm">
												<div className="progress-bar bg-danger w-50"></div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="col-xl-3 col-sm-6 col-12">
								<div className="card">
									<div className="card-body">
										<div className="dash-widget-header">
											<span className="dash-widget-icon text-warning border-warning">
												<i className="fe fe-users"></i>
											</span>
											<div className="dash-count">
												<h3> 1</h3>
											</div>
										</div>
										<div className="dash-widget-info">

											<h6 className="text-muted">Admins</h6>
											<div className="progress progress-sm">
												<div className="progress-bar bg-warning w-50"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div className="row">
							<div className="col-md-12 col-lg-12">
								<div className="card card-table flex-fill">
									<TableAppointmentList />
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Dashboard; 