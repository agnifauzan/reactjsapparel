import React from "react";
// import slider1 from "../assets/images/slider/slider1.jpg";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section classNameName="heroCarousel" style={{ marginTop: 110 }}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{ position: "relative" }}
          >
            <img
              src="..."
              className="d-block w-100"
              alt="..."
              style={{ position: "relative" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ position: "absolute" }}
            >
              <h5>Let's Find it Your Best Clothes</h5>
              <p>
                clothing provider website <br /> with the best quality and
                affordable prices.
              </p>
              <button className="btn btn-secondary">Button</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Let's Find it Your Best Clothes</h5>
              <p>
                clothing provider website with the best quality and affordable
                prices
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Let's Find it Your Best Clothes</h5>
              <p>
                clothing provider website with the best quality and affordable
                prices
              </p>
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          to="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next"
          to="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </section>
  );
}
