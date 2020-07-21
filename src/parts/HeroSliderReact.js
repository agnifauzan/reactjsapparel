// npm install --save slick-carousel react-slick

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider
        {...settings}
        style={{
          marginTop: 120,
          marginLeft: -160,
          marginRight: -160,
        }}
      >
        <div className="parentSlider">
          <div className="backgroundImage">
            <img
              src={require("../assets/images/slider/slider1.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <div className="gradient1">
              <h2>Let's Find it Your Best Clothes</h2>
              <button className="btn btn-primary">Show Me</button>
              <p>
                {" "}
                clothing provider website <br /> with the best quality and
                affordable prices
              </p>
            </div>
          </div>
        </div>
        <div className="parentSlider">
          <div className="backgroundImage">
            <img
              src={require("../assets/images/slider/slider4.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <div className="gradient2">
              <h2>Let's Find it Your Best Clothes</h2>
              <button className="btn btn-primary">Show Me</button>
              <p>
                {" "}
                clothing provider website <br /> with the best quality and
                affordable prices
              </p>
            </div>
          </div>
        </div>
        <div className="parentSlider">
          <div className="backgroundImage">
            <img
              src={require("../assets/images/slider/slider3.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <div className="gradient3">
              <h2>Let's Find it Your Best Clothes</h2>
              <button className="btn btn-primary">Show Me</button>
              <p>
                {" "}
                clothing provider website <br /> with the best quality and
                affordable prices
              </p>
            </div>
          </div>
        </div>
        <div className="parentSlider">
          <div className="backgroundImage">
            <img
              src={require("../assets/images/slider/slider5.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <div className="gradient4">
              <h2>Let's Find it Your Best Clothes</h2>
              <button className="btn btn-primary">Show Me</button>
              <p>
                {" "}
                clothing provider website <br /> with the best quality and
                affordable prices
              </p>
            </div>
          </div>
        </div>
        <div className="parentSlider">
          <div className="backgroundImage">
            <img
              src={require("../assets/images/slider/slider6.jpg")}
              alt="Credit to Joshua Earle on Unsplash"
            />
            <div className="gradient5">
              <h2>Let's Find it Your Best Clothes</h2>
              <button className="btn btn-primary">Show Me</button>
              <p>
                {" "}
                clothing provider website <br /> with the best quality and
                affordable prices
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Hero;
