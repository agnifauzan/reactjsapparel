import React from "react";
import { Link } from "react-router-dom";

import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];

  if (props.isPrimary) className.push("btn-primary");
  if (props.isSeccond) className.push("btn-seccondary");
  if (props.hasShadow) className.push("btn-shadow");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreperre" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}{" "}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}
Button.prototype = {
  type: propTypes.oneOf(["button", "link"]),
  isPrimary: propTypes.bool,
  isSeccond: propTypes.bool,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
  onClick: propTypes.func,
};
