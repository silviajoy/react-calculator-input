"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalculatorDisplay = function CalculatorDisplay(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("p", null, text));
};

CalculatorDisplay.propTypes = {
  text: _propTypes["default"].string.isRequired
};
var _default = CalculatorDisplay;
exports["default"] = _default;