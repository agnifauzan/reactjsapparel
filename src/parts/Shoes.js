import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Shoes({ data }) {
  return (
    <section>
      <div className="container" id="shoes">
        <h2 className="h3 text-ori mb-4">shoes</h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {data.map((shoe, index) => {
            return (
              <div className="col-sm-3" key={`shoes${index}`}>
                <Fade bottom delay={300 * index}>
                  <div className="card">
                    <img
                      src={shoe.imageUrl}
                      className="card-img-top"
                      alt={shoe.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to="#">{shoe.name}</Link>
                      </h5>
                      <p className="card-text">Rp. {shoe.price}</p>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
