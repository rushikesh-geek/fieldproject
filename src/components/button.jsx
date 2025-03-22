import React from "react";
import "./../styles/component.css";

const Button = ({ type = "button", onClick, children, className = "" }) => {
  return (
    <button className={`custom-button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
