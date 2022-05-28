import React, { Component } from "react";
import testimonial1 from "../../../assets/images/testimonial/testi-01.png";
import testimonial2 from "../../../assets/images/testimonial/testi-02.png";

import Slider from "react-slick";

class OurClient extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
      <section className="client-says">
        <div className="container">
          <div className="text-center w-80">
            <h2 className="section-title">Our Client Say's</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto accusantium
              beatae.
            </p>
          </div>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <Slider {...settings}>
                <div className="carousel-item active">
                  <div className="card-testi">
                    <img src={testimonial1} className="d-block" alt="..." />
                    <h4>Hubert IT</h4>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                      quasi architecto accusantium beatae.
                    </p>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card-testi">
                    <img src={testimonial1} className="d-block" alt="..." />
                    <h4>Gloria Smith</h4>
                    <div className="rating">
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="fas fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                      <i className="far fa-star filled"></i>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                      quasi architecto accusantium beatae.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default OurClient;
