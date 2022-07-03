import React, { useContext } from "react";

import "./SignupTab3.css";

import indvidual_logo from "../../../Assets/Images/individual.png";
import team_logo from "../../../Assets/Images/team.png";

import { Heading } from "../..";

import { SignupContext } from "../../../contexts/SignupContext";

function SignupTab3() {
  const { setPointer, formData, setFormData } = useContext(SignupContext);

  function handleSubmit() {
    console.log(formData);
    setPointer((c) => c + 1);
  }

  function selectWorkspaceType() {
    setFormData((curr) => {
      return { ...curr, workspace_type_team: !curr.workspace_type_team };
    });
  }

  return (
    <>
      <Heading
        heading="How are you planning to use Eden?"
        subheading="We'll strearnline your setup experience accordingly."
      />
      <div className="form-style" style={{ marginTop: "30px" }}>
        <div className="plan-container">
          <div className={`plan${!formData.workspace_type_team ? " plan-selected" : ""}`} onClick={selectWorkspaceType}>
            <img src={indvidual_logo} alt="" />
            <h4>For Myself</h4>
            <div>Write better. Think more clearly, Stay organized.</div>
          </div>
          <div className={`plan${formData.workspace_type_team ? " plan-selected" : ""}`} onClick={selectWorkspaceType}>
            <img src={team_logo} alt="" />
            <h4>With my team</h4>
            <div>Wikis, docs, tasks & projects, all in one place.</div>
          </div>
        </div>
        <button className="purple-btn" type="submit" onClick={handleSubmit}>
          Create Workspace
        </button>
      </div>
    </>
  );
}

export default SignupTab3;
