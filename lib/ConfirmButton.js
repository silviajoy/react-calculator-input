"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmButton = function ConfirmButton(_ref) {
  var onComplete = _ref.onComplete,
      confirmText = _ref.confirmText;
  return _react.default.createElement("div", {
    className: "confirmbutton",
    role: "button",
    onClick: function onClick() {
      onComplete('complete');
    }
  }, _react.default.createElement("p", null, confirmText));
};

var _default = ConfirmButton;
exports.default = _default;