"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _KeyButton = _interopRequireDefault(require("./KeyButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumericOps = function NumericOps(_ref) {
  var onOperationClick = _ref.onOperationClick;
  var keys = [];
  var values = ["+", "*", "-", "/"];

  for (var i = 0; i < values.length; i++) {
    keys.push(_react.default.createElement(_KeyButton.default, {
      text: values[i],
      onClick: onOperationClick
    }));
  }

  var rows = [],
      size = 2;

  while (keys.length > 0) {
    rows.push(keys.splice(0, size));
  }

  return _react.default.createElement("div", {
    className: "numericops"
  }, _react.default.createElement("div", {
    className: "numericops-row"
  }, rows[0]), _react.default.createElement("div", {
    className: "numericops-row"
  }, rows[1]));
};

var _default = NumericOps;
exports.default = _default;