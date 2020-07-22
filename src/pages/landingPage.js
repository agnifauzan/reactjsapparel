import React from "react";
import Header from "../parts/Header";
import HeroSlider from "../parts/HeroSliderReact";
import Clothes from "../parts/Clothes";
import Pants from "../parts/Pants";
import Discount from "../parts/Discount";
import Shoes from "../parts/Shoes";
import Footer from "../parts/Footer";

import landingpage from "../json/landingpage.json";

export default function landingPage() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Clothes dataClothes={landingpage.clothes} />
      <Pants dataPants={landingpage.pants} />
      <Discount />
      <Shoes dataShoes={landingpage.shoes} />
      <Footer />
    </div>
  );
}
