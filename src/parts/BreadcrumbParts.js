import React from "react";
import Breadcrumb from "../elements/ElementBreadcrumb";

export default function BreadcrumbParts({ dataBreadcrumb }) {
  return (
    <section style={{ marginTop: 115, marginBottom: 10 }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb data={dataBreadcrumb}></Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
}
