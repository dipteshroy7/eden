import React, { useContext } from "react";

import "./SignupTab4.css";

import success from "../../../Assets/Images/success_tick.png";

import { Heading } from "../..";

import { SignupContext } from "../../../contexts/SignupContext";

function SignupTab4() {
  const { formData } = useContext(SignupContext);
  return (
    <>
      <img className="success" src={success} alt="" />
      <Heading
        heading={`Congratulations, ${formData.display_name}!`}
        subheading="You rave completed onbording, you can start using the Eden!"
      />
      <button className="purple-btn mt-20">Launch Eden</button>
    </>
  );
}

export default SignupTab4;
