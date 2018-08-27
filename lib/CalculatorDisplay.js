"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalculatorDisplay = function CalculatorDisplay(_ref) {
  var text = _ref.text;
  return _react.default.createElement("div", {
    className: "display"
  }, _react.default.createElement("p", null, text));
};

var _default = CalculatorDisplay;
exports.default = _default;