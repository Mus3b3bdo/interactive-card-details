import React from "react";
import "../../App.css";
import logo from "../../images/card-logo.svg";
export default function CardFront() {
  return (
    <div className="CardFront">
      <img
        src={logo}
        alt="logo"
        style={{
          alignSelf: "flex-start",
          transform: "scale(0.6) ",
        }}
      />
      <div style={{ alignSelf: "center" }}>0000 0000 0000 0000</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h3>Jane Appleseed</h3>
        <h3>00/00</h3>
      </div>
    </div>
  );
}
