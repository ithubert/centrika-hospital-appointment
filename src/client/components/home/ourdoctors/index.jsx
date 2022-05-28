import React, { Component } from "react";
import doctor1 from "../../../assets/images/doctors/doctor-011.png";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import * as Constants from '../../config';

class OurDoctor extends Component {

  constructor(props) {
    super(props);
    this.state = {

      doctors: [],
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

		fetch(Constants.APIURL + "/admin/doctors", requestOptions)
			.then(function (response) {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({
					doctors: json.data
				})
			});
	}

  render() {

    const { doctors } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: "10px",
      arrows: true,

      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
      ],
    };


    return (

      <section className="section our-doctors">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Doctors</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab.
            </p>
          </div>
          <div className="doctor-slider slider">
            {doctors && (
              <Slider {...settings}>

                {doctors.map((data, index) => (
                  <Link to={{ pathname: "/patient/checkout", state: { doctorId: data.doctor_id, doctorFname: data.doctor_fname, department: data.department_name } }} >
                    <div className="doc-profile-widgets" key={data.doctor_id}>
                      <div className="doc-image-show">
                        <img src={doctor1} className="img-fluid" alt=".." />
                      </div>
                      <div className="card">
                        <div className="pro-content">
                          <h3 className="title">
                            {data.doctor_fname} {data.doctor_Lname}
                          </h3>
                          <p className="speciality">{data.department_name}</p>

                          <ul className="available-info">
                            <li>
                              <i className="fas fa-map-marker-alt"></i> Kigali, Rwanda
                            </li>
                            <li>
                              <i className="fas fa-calendar-check"></i> Availability: <b className="text-info">{data.doctor_status}</b>

                            </li>
                          </ul>
                        </div>
                        <div className="card-btn">
                          <a href="#0" className="btn btn-view">
                            View Profile
                          </a>
                          <a href="#0" className="btn btn-book-now">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}


              </Slider>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default OurDoctor;
