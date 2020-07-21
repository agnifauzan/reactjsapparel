import React from "react";
import ImageDiscount from "../assets/images/discount.png";
import Fade from "react-reveal/Fade";

export default function Discount() {
  return (
    <section className="discount">
      <Fade bottom delay={300}>
        <div className="col-12">
          <img src={ImageDiscount} alt="" style={{ width: "100%" }} />
        </div>
      </Fade>
    </section>
  );
}
