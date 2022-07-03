import React, { useEffect, useContext } from "react";

import "./Tracker.css";

import { SignupContext } from "../../contexts/SignupContext";

function Tracker() {
  const { pointer, setPointer, formData } = useContext(SignupContext);

  useEffect(() => {
    for (let i = 1; i <= 4; i++) {
      document.getElementById("point-" + i).classList.remove("selected");
    }
    for (let i = 1; i <= pointer; i++) {
      document.getElementById("point-" + i).classList.add("selected");
    }
  }, [pointer]);

  function selectPointer(e) {
    let clicked_point = Number(e.target.innerText);
    if (pointer !== 4) {
      if (clicked_point === 1) setPointer(clicked_point);
      else if ((clicked_point === 2) & (formData.full_name !== "") & (formData.display_name !== ""))
        setPointer(clicked_point);
      else if ((clicked_point === 3) & (formData.workspace_name !== "")) setPointer(clicked_point);
    }
  }

  return (
    <div className="tracker">
      <div id="point-1" onClick={selectPointer} className="pointer nobefore">
        1
      </div>
      <div id="point-2" onClick={selectPointer} className="pointer">
        2
      </div>
      <div id="point-3" onClick={selectPointer} className="pointer">
        3
      </div>
      <div id="point-4" className="pointer noafter">
        4
      </div>
    </div>
  );
}

export default Tracker;
