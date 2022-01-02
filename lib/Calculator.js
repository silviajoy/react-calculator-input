"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NumericKeys = _interopRequireDefault(require("./NumericKeys"));

var _NumericOps = _interopRequireDefault(require("./NumericOps"));

var _ConfirmButton = _interopRequireDefault(require("./ConfirmButton"));

var _CalculatorDisplay = _interopRequireDefault(require("./CalculatorDisplay"));

var _calc = _interopRequireDefault(require("./calc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Calculator = function Calculator(_ref) {
  var onClose = _ref.onClose,
      displayValue = _ref.displayValue,
      onChange = _ref.onChange,
      onComplete = _ref.onComplete,
      className = _ref.className;

  function handleNumberClick(number) {
    _calc["default"][number]();

    onChange();
  }

  function handleOperationClick(op) {
    _calc["default"][op]();

    onChange();
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('calculator', className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "close"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "X")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-display"
  }, /*#__PURE__*/_react["default"].createElement(_CalculatorDisplay["default"], {
    text: displayValue
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-keyboard"
  }, /*#__PURE__*/_react["default"].createElement(_NumericKeys["default"], {
    onNumberClick: handleNumberClick
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "calculator-right"
  }, /*#__PURE__*/_react["default"].createElement(_ConfirmButton["default"], {
    confirmText: "OK",
    onComplete: onComplete
  }), /*#__PURE__*/_react["default"].createElement(_NumericOps["default"], {
    onOperationClick: handleOperationClick
  }))));
};

Calculator.propTypes = {
  onClose: _propTypes["default"].func.isRequired,
  displayValue: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onComplete: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string
};
Calculator.defaultProps = {
  className: ''
};
var _default = Calculator;
exports["default"] = _default;