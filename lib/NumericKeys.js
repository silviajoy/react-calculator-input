"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _KeyButton = _interopRequireDefault(require("./KeyButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumericKeys = function NumericKeys(_ref) {
  var onNumberClick = _ref.onNumberClick,
      leftKey = _ref.leftKey,
      rightKey = _ref.rightKey,
      backgroundColor = _ref.backgroundColor;
  var keys = [];
  var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, leftKey, 0, rightKey];

  for (var i = 0; i < values.length; i++) {
    keys.push(_react.default.createElement(_KeyButton.default, {
      text: values[i],
      onClick: onNumberClick,
      backgroundColor: backgroundColor
    }));
  }

  var rows = [],
      size = 3;

  while (keys.length > 0) {
    rows.push(keys.splice(0, size));
  }

  return _react.default.createElement("div", {
    className: "numerickeys"
  }, _react.default.createElement("div", {
    className: "numerickeys-row"
  }, rows[0]), _react.default.createElement("div", {
    className: "numerickeys-row"
  }, rows[1]), _react.default.createElement("div", {
    className: "numerickeys-row"
  }, rows[2]), _react.default.createElement("div", {
    className: "numerickeys-row"
  }, rows[3]));
};

var _default = NumericKeys;
exports.default = _default;