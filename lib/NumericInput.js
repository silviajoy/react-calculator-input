"use strict";

var React = require("react");

var Calculator = require('./Calculator.jsx');

var NumericInput = React.createClass({
  displayName: "NumericInput",
  getInitialState: function getInitialState() {
    return {
      className: "dnone",
      inputValue: "",
      displayValue: "0"
    };
  },
  onFocus: function onFocus() {
    this.setState({
      className: "dflex"
    });
  },
  onComplete: function onComplete() {
    var total = eval(this.state.displayValue);
    this.setState({
      className: "dnone",
      inputValue: total
    });
  },
  onChangeDisplay: function onChangeDisplay(val) {
    var currentVal = this.state.displayValue;
    var newValue = val.toString();
    /* delete */

    if (val === '<') {
      newValue = currentVal.slice(0, -1);

      if (newValue == '') {
        newValue = '0';
      }

      this.setState({
        displayValue: newValue
      });
      return;
    }
    /* avoid double . insertion */


    if (val === '.' && currentVal.includes(".")) {
      return;
    }
    /* if it's not the first character or if next value is . */


    if (currentVal != '0' || val == '.') {
      if (currentVal == '') {
        newValue = "0".concat(val);
      } else {
        newValue = "".concat(currentVal).concat(val);
      }
    }

    this.setState({
      displayValue: newValue
    });
  },
  handleChange: function handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      displayValue: event.target.value
    });
  },
  onBlur: function onBlur() {
    var _this = this;

    setTimeout(function () {
      var active = document.activeElement;

      if (!active.classList.contains("calculator-wrapper") || active.id == _this.props.id) {
        _this.setState({
          className: "dnone"
        });
      }
    }, 1);
  },
  onClose: function onClose() {
    this.setState({
      className: "dnone"
    });
  },
  render: function render() {
    return React.createElement("div", {
      className: "numericinput"
    }, React.createElement("input", {
      id: this.props.id,
      type: "number",
      name: this.props.name,
      onFocus: this.onFocus,
      value: this.state.inputValue,
      onChange: this.handleChange,
      onBlur: this.onBlur
    }), React.createElement("label", {
      htmlFor: this.props.id
    }, this.props.label), React.createElement("div", {
      className: "calculator-wrapper " + this.state.className,
      tabIndex: "-1"
    }, React.createElement(Calculator, {
      onComplete: this.onComplete,
      displayValue: this.state.displayValue,
      onChangeDisplay: this.onChangeDisplay,
      close: this.onClose
    })));
  }
});
module.exports = NumericInput;