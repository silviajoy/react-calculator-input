"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Calculator = _interopRequireDefault(require("./Calculator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NumericInput =
/*#__PURE__*/
function (_Component) {
  _inherits(NumericInput, _Component);

  function NumericInput(props) {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericInput).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        className: "dflex"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onComplete", function () {
      var total = eval(_this.state.displayValue);

      _this.setState({
        className: "dnone",
        inputValue: total
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeDisplay", function (val) {
      var currentVal = _this.state.displayValue;
      var newValue = val.toString();
      /* delete */

      if (val === '<') {
        newValue = currentVal.slice(0, -1);

        if (newValue == '') {
          newValue = '0';
        }

        _this.setState({
          displayValue: newValue
        });

        return;
      }
      /* avoid double . insertion */


      if (val === '.' && currentVal.includes(".")) {
        return;
      }
      /* if it's not the first character or if next value is . */


      if (currentVal != '0' || val == '.') {
        if (currentVal == '') {
          newValue = "0".concat(val);
        } else {
          newValue = "".concat(currentVal).concat(val);
        }
      }

      _this.setState({
        displayValue: newValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.setState({
        inputValue: event.target.value,
        displayValue: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      setTimeout(function () {
        var active = document.activeElement;

        if (!active.classList.contains("calculator-wrapper") || active.id == _this.props.id) {
          _this.setState({
            className: "dnone"
          });
        }
      }, 1);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        className: "dnone"
      });
    });

    _this.state = {
      className: "dnone",
      inputValue: "",
      displayValue: "0"
    };
    return _this;
  }

  _createClass(NumericInput, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "numericinput"
      }, _react.default.createElement("input", {
        id: this.props.id,
        type: "number",
        name: this.props.name,
        onFocus: this.onFocus,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: this.onBlur
      }), _react.default.createElement("label", {
        htmlFor: this.props.id
      }, this.props.label), _react.default.createElement("div", {
        className: "calculator-wrapper " + this.state.className,
        tabIndex: "-1"
      }, _react.default.createElement(_Calculator.default, {
        onComplete: this.onComplete,
        displayValue: this.state.displayValue,
        onChangeDisplay: this.onChangeDisplay,
        close: this.onClose
      })));
    }
  }]);

  return NumericInput;
}(_react.Component);

var _default = NumericInput;
exports.default = _default;