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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  function NumericInput(_props) {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericInput).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        className: "dflex"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onComplete", function () {
      var total = eval(_this.state.displayValue).toFixed(4);
      var parsedValue = _this.props.format === 'integer' ? parseInt(total, 10) : parseFloat(total);

      _this.setState({
        className: "dnone",
        inputValue: parsedValue,
        displayValue: parsedValue.toString()
      }, _this.proxyOnChangeOnRefWithValue(_this.inputRef, parsedValue));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeDisplay", function (val) {
      var currentVal = _this.state.displayValue;
      var newValue = val.toString();
      /* delete */

      if (val === '<') {
        newValue = currentVal.slice(0, -1);
        /* avoid blank screen */

        if (newValue == '') {
          newValue = '0';
        }

        _this.setState({
          displayValue: newValue
        });

        return;
      }
      /* avoid double . insertion */


      var lastNumber = currentVal.split(/\-|\+|\/|\*/).pop();

      if (val === '.' && lastNumber.includes(".")) {
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

      var lastCharacter = currentVal.split('').pop();

      if (['+', '-', '*', '/'].includes(val)) {
        /* avoid consecutive operation insertion */
        if (['+', '-', '*', '/'].includes(lastCharacter)) {
          newValue = "".concat(currentVal.slice(0, -1)).concat(val);
        }
        /* avoid .+ situations */


        if (lastCharacter == '.') {
          newValue = "".concat(currentVal, "0").concat(val);
        }
      }

      _this.setState({
        displayValue: newValue
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var parsedValue = _this.props.format === 'integer' ? parseInt(event.target.value, 10) : parseFloat(event.target.value);
      var value = isNaN(parsedValue) ? 0 : parsedValue;
      var stringValue = value.toString();

      _this.setState({
        inputValue: value,
        displayValue: stringValue
      }, _this.proxyOnChangeOnRefWithValue(_this.inputRef, value));
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "proxyOnChangeOnRefWithValue", function (ref, value) {
      if (typeof _this.props.onChange !== 'function') return;
      var event = new Event('change', {
        bubbles: true
      });
      Object.defineProperty(event, 'target', {
        value: ref.current,
        enumerable: true,
        writable: true
      });
      event.target.value = value.toString();

      _this.props.onChange(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sanitizeRenderProps", function (props) {
      delete props.ref;
      delete props.type;
      delete props.onFocus;
      delete props.onChange;
      delete props.onBlur;
      return props;
    });

    _this.state = {
      className: "dnone",
      inputValue: 0,
      displayValue: "0"
    };
    _this.inputRef = _react.default.createRef();
    return _this;
  }

  _createClass(NumericInput, [{
    key: "render",
    value: function render() {
      var props = Object.assign({}, this.props);

      var _this$sanitizeRenderP = this.sanitizeRenderProps(props),
          labelProps = _this$sanitizeRenderP.label,
          inputProps = _objectWithoutProperties(_this$sanitizeRenderP, ["label"]);

      return _react.default.createElement("div", {
        className: "numeric-input-component"
      }, props.label && (props.labelPosition == "top" || !props.labelPosition) && _react.default.createElement("label", {
        htmlFor: props.id
      }, props.label), _react.default.createElement("input", _extends({
        ref: this.inputRef,
        id: props.id,
        className: props.className,
        type: "number",
        name: props.name,
        onFocus: this.onFocus,
        value: this.state.inputValue,
        onChange: this.handleChange,
        onBlur: this.onBlur
      }, inputProps)), props.label && props.labelPosition == "bottom" && _react.default.createElement("label", {
        htmlFor: props.id
      }, props.label), _react.default.createElement("div", {
        className: "calculator-wrapper " + this.state.className,
        tabIndex: "-1"
      }, _react.default.createElement(_Calculator.default, {
        onComplete: this.onComplete,
        displayValue: this.state.displayValue,
        onChangeDisplay: this.onChangeDisplay,
        close: this.onClose,
        backgroundColor: props.calculatorBackground,
        keyColor: props.calculatorKeyColor
      })));
    }
  }]);

  return NumericInput;
}(_react.Component);

var _default = NumericInput;
exports.default = _default;