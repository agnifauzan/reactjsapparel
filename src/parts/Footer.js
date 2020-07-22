import React from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

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
                  <Button type="link" href="#">
                    New Account
                  </Button>
                  {/* <Link to="http://"> new Acoount</Link> */}
                </li>
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Start Find Item
                  </Button>
                </li>
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Use Payment
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-3 mb-4">
              <h5 className="mt-4">Explore</h5>
              <ul className="list-group list-group-flush">
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Our Careers
                  </Button>
                </li>
                <li className="list-gropu-item">
                  {" "}
                  <Button type="link" href="#">
                    Privacy
                  </Button>
                </li>
                <li className="list-gropu-item">
                  {" "}
                  <Button type="link" href="#">
                    Terms & Condition
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 mb-4">
              <h5 className="mt-4">Folow Me</h5>
              <ul className="list-group list-group-flush">
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Instargram
                  </Button>
                </li>
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Facebook
                  </Button>
                </li>
                <li className="list-gropu-item">
                  <Button type="link" href="#">
                    Twitter
                  </Button>
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
