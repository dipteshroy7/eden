import React, { useContext } from "react";

import "./SignupTab2.css";

import { Heading } from "../..";

import { SignupContext } from "../../../contexts/SignupContext";

function SignupTab2() {
  const { setPointer, formData, setFormData } = useContext(SignupContext);

  function handleSubmit(e) {
    e.preventDefault();
    setFormData((curr) => {
      let workspace = document.getElementById("workspace_name").value;
      let workspaceURL = document.getElementById("workspace_url").value;
      return { ...curr, workspace_name: workspace, workspace_url: workspaceURL };
    });
    setPointer((c) => c + 1);
  }

  return (
    <>
      <Heading
        heading="Let's set up a home for all your work"
        subheading="You can always create another workspace later."
      />
      <form className="form-style" onSubmit={handleSubmit}>
        <label>Workspace Name</label>
        <input
          id="workspace_name"
          type="text"
          defaultValue={formData.workspace_name}
          placeholder="Eden"
          required
        ></input>
        <label>
          Workspace URL<span style={{ fontSize: "12px", color: "#aaa" }}> (optional)</span>
        </label>
        <div className="workspace-url">
          <div className="fix-url">www.eden.com/</div>
          <input
            id="workspace_url"
            className="input-url"
            type="text"
            defaultValue={formData.workspace_url}
            placeholder="Example"
          />
        </div>
        <button className="purple-btn" type="submit">
          Create Workspace
        </button>
      </form>
    </>
  );
}

export default SignupTab2;
