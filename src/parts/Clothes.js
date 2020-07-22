import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function Clothes({ dataClothes }) {
  return (
    <section className="page-section" id="clothes" style={{ marginTop: 100 }}>
      <div className="container">
        <h2 className="h3 text-ori mb-4">Clothes</h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {dataClothes.map((cloth, index) => {
            return (
              <div className="col-sm-3" key={`clothes${index}`}>
                <Fade bottom delay={300 * index}>
                  <div className="card">
                    <img
                      src={cloth.imageUrl}
                      alt={cloth.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to="#">{cloth.name}</Link>
                      </h5>
                      <p className="card-text">Rp. {cloth.price}</p>
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
