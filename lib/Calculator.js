"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NumericKeys = _interopRequireDefault(require("./NumericKeys"));

var _NumericOps = _interopRequireDefault(require("./NumericOps"));

var _ConfirmButton = _interopRequireDefault(require("./ConfirmButton"));

var _CalculatorDisplay = _interopRequireDefault(require("./CalculatorDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calculator = function Calculator(_ref) {
  var close = _ref.close,
      displayValue = _ref.displayValue,
      onChangeDisplay = _ref.onChangeDisplay,
      onComplete = _ref.onComplete;
  return _react.default.createElement("div", {
    className: "calculator"
  }, _react.default.createElement("div", {
    className: "close",
    onClick: close
  }, _react.default.createElement("p", null, "X")), _react.default.createElement("div", {
    className: "calculator-display"
  }, _react.default.createElement(_CalculatorDisplay.default, {
    text: displayValue
  })), _react.default.createElement("div", {
    className: "calculator-keyboard"
  }, _react.default.createElement(_NumericKeys.default, {
    onNumberClick: function onNumberClick(number) {
      onChangeDisplay(number);
    },
    leftKey: ".",
    rightKey: "<"
  }), _react.default.createElement("div", {
    className: "calculator-right"
  }, _react.default.createElement(_ConfirmButton.default, {
    confirmText: "OK",
    onComplete: onComplete
  }), _react.default.createElement(_NumericOps.default, {
    onOperationClick: function onOperationClick(op) {
      onChangeDisplay(op);
    }
  }))));
};

var _default = Calculator;
exports.default = _default;