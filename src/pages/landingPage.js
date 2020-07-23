import Header from "../parts/Header";
import HeroSlider from "../parts/HeroSliderReact";
import Clothes from "../parts/Clothes";
import Pants from "../parts/Pants";
import Discount from "../parts/Discount";
import Shoes from "../parts/Shoes";
import Footer from "../parts/Footer";

import landingpage from "../json/landingpage.json";

import React, { Component } from "react";

export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Landing Page";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <HeroSlider refMostPicked={this.refMostPicked} />
        <Clothes
          refMostPicked={this.refMostPicked}
          dataClothes={landingpage.clothes}
        />
        <Pants dataPants={landingpage.pants} />
        <Discount />
        <Shoes dataShoes={landingpage.shoes} />
        <Footer />
      </div>
    );
  }
}
