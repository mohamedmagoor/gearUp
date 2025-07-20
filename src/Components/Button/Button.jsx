import React from "react";

export default function Button(props) {
  const customStyles = {};
  if (props.color && !props.customClasses) {
    customStyles.color = props.color;
  }
  if (props.padding) {
    customStyles.padding = props.padding;
  }

  const defaultClasses = "btn btn-primary fw-bold";
  const buttonClasses = props.customClasses
    ? `${props.customClasses} fw-bold`
    : defaultClasses;

  return (
    <button
      onClick={props.handleClick}
      style={customStyles}
      className={buttonClasses}
    >
      {props.label}
    </button>
  );
}
