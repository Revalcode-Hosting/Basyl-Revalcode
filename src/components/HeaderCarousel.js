import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      touchMove: true,
    };
    return (
      <Slider {...settings}>
        <div className="carousel one">
          <div className="carousel-content">
            <h3 className="title-slider">
              Businnes
              <br />
              Consultants
            </h3>
            <p>
              We apply a current accounting business model, through innovative
              operations that help us keep your company updated to go one step
              ahead of financial eventualities.
            </p>
          </div>
        </div>
        <div className="carousel two">
          <div className="carousel-content">
            <h3 className="title-slider">Punctual</h3>
            <p>
              Through each of our services, we provide punctual and personalized
              attention to guarantee results that are reflected in the growth
              and profitability of your company.
            </p>
          </div>
        </div>
        <div className="carousel three">
          <div className="carousel-content">
            <h3 className="title-slider">
              Committed <br />
              to your company
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus.
            </p>
          </div>
        </div>
      </Slider>
    );
  }
}
