import React from "react";
// import { Link } from "react-router-dom";

import Button from "../../src/elements/Button";

export default function BrandIcon() {
  return (
    <div className="col-4">
      <Button
        type="link"
        className="navbar-brand"
        href="#"
        style={{ paddingLeft: 0 }}
      >
        Apparel
      </Button>
    </div>
  );
}
