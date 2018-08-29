import React from "react";
import { render } from "react-dom";
import NumericInput from "../../lib";
import '../../lib/index.scss';
import './styles.css'

function Demo() {
  return (
    <div className="calculator-input-container">
      <h1>React Calculator Input</h1>
      <NumericInput id="myinput" label={"Age"} name="age" />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
