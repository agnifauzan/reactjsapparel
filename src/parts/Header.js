import React from "react";

import Button from "../../src/elements/Button";

import BrandIcon from "../elements/BrandIcon";
import iconClothes from "../assets/images/icon/newClothes.svg";
import iconPants from "../assets/images/icon/newPants.svg";
import iconShoes from "../assets/images/icon/newShoes.svg";
import iconChart from "../assets/images/icon/iconChart.svg";

import Fade from "react-reveal/Fade";

export default function Header(props) {
  return (
    <Fade>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
                <Button type="link" href="#clothes" className="nav-link">
                  <img src={iconClothes} alt="" />
                  <span className="sr-only">(current)</span>
                </Button>
              </li>
              <li className="nav-item">
                <Button type="link" href="#clothes" className="nav-link">
                  <img src={iconPants} alt="" />
                  <span className="sr-only">(current)</span>
                </Button>
              </li>
              <li className="nav-item">
                <Button type="link" href="#clothes" className="nav-link">
                  <img src={iconShoes} alt="" />
                  <span className="sr-only">(current)</span>
                </Button>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse col-sm-4"
            style={{ paddingLeft: 220 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button type="link" href="#clothes" className="nav-link">
                  <img src={iconChart} alt="" />
                  <span className="sr-only">(current)</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fade>
  );
}
