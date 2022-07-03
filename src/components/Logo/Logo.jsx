import React from "react";

import "./Logo.css";

import eden_logo from "../../Assets/Images/eden_logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={eden_logo} alt="" />
      <h2>Eden</h2>
    </div>
  );
}

export default Logo;
