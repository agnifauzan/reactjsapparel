import React from "react";
import Fade from "react-reveal/Fade";
import DetailItems from "./DetailItems";

export default function FeatureProduk({ dataDetail }) {
  return (
    <section className="spesifikasi">
      <div className="container">
        <div className="row">
          {dataDetail.map((spec, index) => {
            return (
              <div
                className="col-sm-6"
                style={{ paddingLeft: 0 }}
                key={`spec ${index}`}
              >
                <h4>{spec.header}</h4>
                <ul className="list-group list-group-flush">
                  {spec.items.map((item, index) => {
                    return (
                      <Fade key={index} left delay={400 * index}>
                        <li className="list-group-item">
                          <i className="fa fa-check-square" aria-hidden="true">
                            &nbsp;&nbsp;
                          </i>
                          {item.spec}
                        </li>
                      </Fade>
                    );
                  })}
                </ul>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
