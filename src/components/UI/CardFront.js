import React from "react";
import "../../App.css";
import logo from "../../images/card-logo.svg";
export default function CardFront() {
  return (
    <div className="CardFront">
      <img
        src={logo}
        alt="logo"
        style={{ alignSelf: "flex-start", fontSize: 0.5 }}
      />
      <span>0000 0000 0000 0000</span>
      <div className="CardFront-p">
        <h3>Jane Appleseed</h3>
        <h3>00/00</h3>
      </div>
    </div>
  );
}
