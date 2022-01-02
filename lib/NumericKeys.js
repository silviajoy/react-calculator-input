"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _KeyButton = _interopRequireDefault(require("./KeyButton"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var numericKeysClassMap = {
  '.': 'num-key-left',
  CE: 'num-key-right',
  0: 'num-key-zero',
  1: 'num-key-one',
  2: 'num-key-two',
  3: 'num-key-three',
  4: 'num-key-four',
  5: 'num-key-five',
  6: 'num-key-six',
  7: 'num-key-seven',
  8: 'num-key-eight',
  9: 'num-key-nine'
};
var numericKeysOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'CE'];

var NumericKeys = function NumericKeys(_ref) {
  var onNumberClick = _ref.onNumberClick,
      className = _ref.className;
  var unused = 'error';
  var keys = numericKeysOrder.map(function (key) {
    return /*#__PURE__*/_react["default"].createElement(_KeyButton["default"], {
      key: "num-key-".concat(numericKeysClassMap[key]),
      text: "".concat(key),
      onClick: onNumberClick,
      className: (0, _classnames["default"])(numericKeysClassMap[key], className)
    });
  });
  var rows = [],
      size = 3;

  while (keys.length > 0) {
    rows.push(keys.splice(0, size));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "numerickeys"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "numerickeys-row"
  }, rows[0]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "numerickeys-row"
  }, rows[1]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "numerickeys-row"
  }, rows[2]), /*#__PURE__*/_react["default"].createElement("div", {
    className: "numerickeys-row"
  }, rows[3]));
};

NumericKeys.propTypes = {
  className: _propTypes["default"].string,
  onNumberClick: _propTypes["default"].func.isRequired
};
NumericKeys.defaultProps = {
  className: ''
};
var _default = NumericKeys;
exports["default"] = _default;