// npm install --save slick-carousel react-slick

import React from "react";

import Button from "../elements/Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSliderReact(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }
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
        marginTop: 99,
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
            <Button className="btn" isPrimary onClick={showMostPicked}>
              Show Me
            </Button>
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
            src={require("../assets/images/slider/slider2.jpg")}
            alt="Credit to Joshua Earle on Unsplash"
          />
          <div className="gradient2">
            <h2>Let's Find it Your Best Clothes</h2>
            <Button className="btn" isPrimary onClick={showMostPicked}>
              Show Me
            </Button>
            <p>
              {" "}
              clothing provider website <br /> with the best quality and
              affordable prices
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="parentSlider">
        <div className="backgroundImage">
          <img
            src={require("../assets/images/slider/slider3.jpg")}
            alt="Credit to Joshua Earle on Unsplash"
          />
          <div className="gradient3">
            <h2>Let's Find it Your Best Clothes</h2>
            <Button className="btn" isPrimary onClick={showMostPicked}>
              Show Me
            </Button>
            <p>
              {" "}
              clothing provider website <br /> with the best quality and
              affordable prices
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="parentSlider">
        <div className="backgroundImage">
          <img
            src={require("../assets/images/slider/slider4.jpg")}
            alt="Credit to Joshua Earle on Unsplash"
          />
          <div className="gradient4">
            <h2>Let's Find it Your Best Clothes</h2>
            <Button className="btn" isPrimary onClick={showMostPicked}>
              Show Me
            </Button>
            <p>
              {" "}
              clothing provider website <br /> with the best quality and
              affordable prices
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="parentSlider">
        <div className="backgroundImage">
          <img
            src={require("../assets/images/slider/slider5.jpg")}
            alt="Credit to Joshua Earle on Unsplash"
          />
          <div className="gradient5">
            <h2>Let's Find it Your Best Clothes</h2>
            <Button className="btn" isPrimary onClick={showMostPicked}>
              Show Me
            </Button>
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
