import React from "react";
import { render } from "react-dom";
import NumericInput from "../../lib";
import '../../lib/index.scss';

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <NumericInput id="myinput" label="Age" name="age" format="integer" />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
