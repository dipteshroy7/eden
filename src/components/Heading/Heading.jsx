import React from "react";

import "./Heading.css";

function Heading({ heading, subheading }) {
  return (
    <>
      <h1>{heading}</h1>
      <span>{subheading}</span>
    </>
  );
}

export default Heading;
