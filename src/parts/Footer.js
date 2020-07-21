import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section style={{ marginBottom: 0 }}>
      <footer>
        <div className="container">
          <div className="row" style={{ borderBottom: 0.01 }}>
            <div className="col-4 mb-4">
              <h4 className="mt-4">Apparel</h4>
              <p>Clothing provider website with the best quality</p>
            </div>
            <div className="col-3 mb-4">
              <h5 className="mt-4">For beginer</h5>
              <ul className="list-group list-group-flush">
                <li className="list-gropu-item">
                  <Link to="http://"> new Acoount</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://">Start Find Item</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://">Use Payment</Link>
                </li>
              </ul>
            </div>
            <div className="col-3 mb-4">
              <h5 className="mt-4">Explore</h5>
              <ul className="list-group list-group-flush">
                <li className="list-gropu-item">
                  <Link to="http://"> Our Careers</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://"> Privacy</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://"> Terms & Condition</Link>
                </li>
              </ul>
            </div>
            <div className="col-2 mb-4">
              <h5 className="mt-4">Folow Me</h5>
              <ul className="list-group list-group-flush">
                <li className="list-gropu-item">
                  <Link to="http://">Instargram</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://">Facebook</Link>
                </li>
                <li className="list-gropu-item">
                  <Link to="http://"> Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt-4 pb-3">
            <p
              className="text-center"
              style={{ fontSize: 16, fontWeight: 300 }}
            >
              Copyrights 2020 - All Rights Reserved - Apparel
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
