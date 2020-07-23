import React from "react";
import Fade from "react-reveal/Fade";

export default function DetailItems({ dataDetail }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          {dataDetail.imageUrls.map((parentImage, index1) => {
            return (
              <div
                className="col-sm-8"
                style={{ paddingLeft: 0 }}
                key={`parentImage ${index1}`}
              >
                <Fade bottom delay={300 * index1}>
                  <div className="imagecoverBig">
                    <img src={parentImage.url} alt="" />
                  </div>
                </Fade>
                <div className="rowDisplay">
                  {parentImage.imageChild.map((childImage, index2) => {
                    return (
                      <div
                        className="row"
                        style={{ marginLeft: 0, marginRight: 0 }}
                        key={`childImage ${index2}`}
                      >
                        <div
                          className="col-sm-12"
                          style={{ paddingLeft: 0, paddingRight: 0 }}
                        >
                          <Fade bottom delay={400 * index2}>
                            <div className="imagecover">
                              <img src={childImage.url} alt="" />
                            </div>
                          </Fade>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <Fade right>
            <div className="col-sm-4">
              <form>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Nama</label>
                  <div className="col-sm-6">
                    <p>{dataDetail.name}</p>
                  </div>
                  <label className="col-sm-5 col-form-label">Harga</label>
                  <div className="col-sm-6">
                    <p>Rp. {dataDetail.price}</p>
                  </div>
                  <label className="col-sm-5 col-form-label">Ukuran</label>
                  <div className="col-sm-6">
                    <p>{dataDetail.size}</p>
                  </div>
                  <label className="col-sm-5">kuantitas</label>
                  <select className="form-control col-sm-2 ml-3" id="kuantitas">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      style={{ marginTop: 55 }}
                    >
                      <a href="keranjang.html" style={{ color: "white" }}>
                        Keranjang
                      </a>
                    </button>
                  </div>
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      action="checkInformation.html"
                      className="btn btn-primary"
                    >
                      <a
                        href="checkInformation.html"
                        style={{ color: "black" }}
                      >
                        Chart
                      </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
