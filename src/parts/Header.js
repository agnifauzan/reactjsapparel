import React from "react";

import BrandIcon from "../elements/BrandIcon";
import iconClothes from "../assets/images/icon/newClothes.svg";
import iconPants from "../assets/images/icon/newPants.svg";
import iconShoes from "../assets/images/icon/newShoes.svg";
import iconChart from "../assets/images/icon/iconChart.svg";

import Fade from "react-reveal/Fade";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Fade>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{ opacity: 0.9 }}
      >
        <div className="container">
          <BrandIcon />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse col-sm-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="#clothes" className="nav-link">
                  <img src={iconClothes} alt="" />
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#pants" className="nav-link">
                  <img src={iconPants} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#shoes" className="nav-link">
                  <img src={iconShoes} alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse col-sm-4"
            style={{ paddingLeft: 220 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#chart" className="nav-link">
                  <img src={iconChart} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fade>
  );
}
