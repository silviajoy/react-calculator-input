import React from "react";
import { render } from "react-dom";
import NumericInput from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <NumericInput id="myinput" label="Age" name="age"/>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
