import React from "react";
import "../../App.css";
export default function RightSide({ children }) {
  return (
    <div className="right" role="main">
      {children}
    </div>
  );
}
