import React from "react";
import Fade from "react-reveal/Fade";

export default function OurItems({ dataOur }) {
  return (
    <section>
      <div class="container" id="shoes">
        <h2 class="h3 text-ori mb-4">Rekomendasi product</h2>
        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
          {dataOur.map((our, index) => {
            return (
              <div class="col-sm-3" key={`dataour ${index}`}>
                <Fade bottom delay={300 * index}>
                  <div class="card">
                    <img src={our.imageUrl} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="#">{our.name}</a>
                      </h5>
                      <p class="card-text">Rp. {our.price}</p>
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
