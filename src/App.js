import { useState } from "react";
import "./App.css";

import { SignupContext } from "./contexts/SignupContext";

import { Logo, Tracker, SignupTab1, SignupTab2, SignupTab3, SignupTab4 } from "./components";

function App() {
  const [pointer, setPointer] = useState(1);
  const [formData, setFormData] = useState({
    full_name: "",
    display_name: "",
    workspace_name: "",
    workspace_url: "",
    workspace_type_team: false,
  });

  return (
    <div className="App">
      <SignupContext.Provider value={{ pointer, setPointer, formData, setFormData }}>
        <Logo />
        <Tracker />
        {pointer === 1 && <SignupTab1 />}
        {pointer === 2 && <SignupTab2 />}
        {pointer === 3 && <SignupTab3 />}
        {pointer === 4 && <SignupTab4 />}
      </SignupContext.Provider>
    </div>
  );
}

export default App;
