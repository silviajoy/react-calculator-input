"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var KeyButton = function KeyButton(_ref) {
  var className = _ref.className,
      _onClick = _ref.onClick,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('button', className),
    role: "button",
    onClick: function onClick() {
      _onClick(text);
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, text));
};

KeyButton.propTypes = {
  className: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  text: _propTypes["default"].string.isRequired
};
KeyButton.defaultProps = {
  className: ''
};
var _default = KeyButton;
exports["default"] = _default;