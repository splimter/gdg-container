import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickCustomization.css";
import SimpleCard from "./EventCard";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
          <div>
            <SimpleCard />
          </div>
        </Slider>
      </div>
    );
  }
}
