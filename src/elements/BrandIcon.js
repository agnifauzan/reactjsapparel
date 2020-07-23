import React from "react";

import Button from "../../src/elements/Button";

export default function BrandIcon(props) {
  return (
    <div className="col-4" style={{ paddingLeft: 0 }}>
      <Button
        type="link"
        className="navbar-brand"
        style={""}
        href=""
        style={{ paddingLeft: 0 }}
      >
        Apparel
      </Button>
    </div>
  );
}
