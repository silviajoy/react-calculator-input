"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyButton = function KeyButton(_ref) {
  var _onClick = _ref.onClick,
      text = _ref.text;
  return _react.default.createElement("div", {
    className: "button",
    role: "button",
    onClick: function onClick() {
      _onClick(text);
    }
  }, _react.default.createElement("p", null, text));
};

var _default = KeyButton;
exports.default = _default;