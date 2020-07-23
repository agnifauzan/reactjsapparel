import React from "react";
import deskripsiNike from "../assets/images/deskripsiNike.jpg";

export default function DeskripsiProduk() {
  return (
    <div className="container">
      <div className="tab-wrap">
        <input type="radio" id="tab1" name="tabGroup1" className="tab" />
        <label for="tab1">Deskripsi</label>

        <input
          type="radio"
          id="tab2"
          name="tabGroup1"
          className="tab"
          checked
        />
        <label for="tab2">Spesifikasi</label>

        <input type="radio" id="tab3" name="tabGroup1" className="tab" />
        <label for="tab3">Ulasan</label>

        <div className="tab__content">
          <h5>
            NIKE Men Quest 2 Shoe Sepatu Olahraga Pria - Black [CI3787-002
            US7-11 2002]
          </h5>
          <p>
            Our shoes are 100% ORIGINAL, we do not handle pirate shoes, clones
            or imitations, so you can have total confidence that your purchase
            has all the quality that supports you belonging to the original
            brand.
          </p>
          <img src={deskripsiNike} alt="" style={{ width: 500 }} />
        </div>

        <div className="tab__content">
          <h5>
            NIKE Men Quest 2 Shoe Sepatu Olahraga Pria - Black [CI3787-002
            US7-11 2002]
          </h5>
          <h5 className="pt-3">Spesifikasi Produk</h5>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Brand</th>
                <td>Nike</td>
              </tr>
              <tr>
                <th scope="row">Material</th>
                <td>fabric or leather</td>
              </tr>
              <tr>
                <th scope="row">Dimensi Produk</th>
                <td>32x18x12</td>
              </tr>
              <tr>
                <th scope="row">Berat</th>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tab__content">
          <h5>
            NIKE Men Quest 2 Shoe Sepatu Olahraga Pria - Black [CI3787-002
            US7-11 2002]
          </h5>
        </div>
      </div>
    </div>
  );
}
