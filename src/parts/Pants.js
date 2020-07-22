import React from "react";
import Fade from "react-reveal/Fade";

export default function Pants({ dataPants }) {
  return (
    <section>
      <div className="container" id="pants">
        <h2 className="h3 text-ori mb-4">pants</h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {dataPants.map((pant, index) => {
            return (
              <div className="col-sm-3" key={`pants${index}`}>
                <Fade bottom delay={300 * index}>
                  <div className="card">
                    <img
                      src={pant.imageUrl}
                      className="card-img-top"
                      alt={pant.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="#">{pant.name}</a>
                      </h5>
                      <p className="card-text">Rp. {pant.price}</p>
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
