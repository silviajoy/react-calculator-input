"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConfirmButton = function ConfirmButton(_ref) {
  var onComplete = _ref.onComplete,
      confirmText = _ref.confirmText;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "confirmbutton",
    role: "button",
    onClick: function onClick() {
      onComplete('complete');
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, confirmText));
};

ConfirmButton.propTypes = {
  className: _propTypes["default"].string,
  confirmText: _propTypes["default"].string.isRequired,
  onComplete: _propTypes["default"].func.isRequired
};
ConfirmButton.defaultProps = {
  className: ''
};
var _default = ConfirmButton;
exports["default"] = _default;