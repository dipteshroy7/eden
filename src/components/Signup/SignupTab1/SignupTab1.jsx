import React, { useContext } from "react";

import "./SignupTab1.css";

import { Heading } from "../..";

import { SignupContext } from "../../../contexts/SignupContext";

function SignupTab1() {
  const { setPointer, formData, setFormData } = useContext(SignupContext);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData((curr) => {
      let name = document.getElementById("full_name").value;
      let dname = document.getElementById("display_name").value;
      return { ...curr, full_name: name, display_name: dname };
    });
    setPointer((c) => c + 1);
  }

  return (
    <>
      <Heading heading="Welcome! First things first..." subheading="You can always change them later." />
      <form className="form-style" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input id="full_name" type="text" defaultValue={formData.full_name} placeholder="Steve Jobs" required></input>
        <label>Display Name</label>
        <input id="display_name" type="text" defaultValue={formData.display_name} placeholder="Steve" required></input>
        <button className="purple-btn" type="submit">
          Create Workspace
        </button>
      </form>
    </>
  );
}

export default SignupTab1;
