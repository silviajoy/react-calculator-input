"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Calculator = _interopRequireDefault(require("./Calculator"));

var _calc = _interopRequireDefault(require("./calc"));

var _excluded = ["label", "labelPosition"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var keyCodeSelectorMap = {
  Backspace: '.num-key-right',
  '.': '.num-key-left',
  '=': '.confirmbutton',
  Enter: '.confirmbutton',
  enter: '.confirmbutton',
  '+': '.num-op-plus',
  '-': '.num-op-minus',
  '*': '.num-op-times',
  '/': '.num-op-divide',
  //"F9": "+/-",
  //"A": "AC",
  //"a": "AC",
  Escape: '.close button',
  //"C": "CE",
  //"c": "CE",
  0: '.num-key-zero',
  1: '.num-key-one',
  2: '.num-key-two',
  3: '.num-key-three',
  4: '.num-key-four',
  5: '.num-key-five',
  6: '.num-key-six',
  7: '.num-key-seven',
  8: '.num-key-eight',
  9: '.num-key-nine'
};

var NumericInput = /*#__PURE__*/function (_Component) {
  _inherits(NumericInput, _Component);

  var _super = _createSuper(NumericInput);

  function NumericInput(_props) {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "handleComplete", function () {
      _calc["default"]['=']();

      _this.setState({
        isVisible: false,
        inputValue: _calc["default"].getResult(),
        displayValue: _calc["default"].getSteps()
      }, function () {
        _this.proxyOnChangeOnRefWithValue(_this.inputRef, _this.state.inputValue);
      });

      var inputEl = _this.inputRef.current;
      inputEl.blur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var parsedValue = parseFloat(event.target.value);
      var value = isNaN(parsedValue) ? 0 : parsedValue;
      var stringValue = value.toString();

      _this.setState({
        inputValue: value,
        displayValue: stringValue
      }, function () {
        _this.moveCursorToEnd(_this.state);

        _this.proxyOnChangeOnRefWithValue(_this.inputRef, value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "blurTimeout", 0);

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.blurTimeout = setTimeout(function () {
        var active = document.activeElement;

        if (!active.classList.contains('calculator-wrapper') || active.id == _this.props.id) {
          _this.setState({
            isVisible: false
          });
        }
      }, 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      var inputEl = _this.inputRef.current;
      inputEl.blur();

      _this.setState({
        isVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var parsedValue = parseFloat(event.target.value);

      _this.hydrateCalcBuffer(parsedValue);

      _this.setState({
        isVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyUp", function (event) {
      if (!_this.state.isVisible) {
        return;
      }

      var keyCode = event.key;

      if (keyCode in keyCodeSelectorMap) {
        event.preventDefault();

        var el = _this.calcRef.current.querySelector(keyCodeSelectorMap[keyCode]);

        if (!el) {
          throw new Error('react-calculator-input: Key binding missing!');
        }

        var clickEvent = new Event('click', {
          bubbles: true,
          target: {
            value: el,
            enumerable: true,
            writable: true
          }
        });
        el.dispatchEvent(clickEvent);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "proxyOnChangeOnRefWithValue", function (ref, value) {
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

    _defineProperty(_assertThisInitialized(_this), "sanitizeRenderProps", function (_ref) {
      var props = _extends({}, _ref);

      delete props.ref;
      delete props.type;
      delete props.handleFocus;
      delete props.onChange;
      delete props.handleBlur;
      delete props.initialValue;
      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (val) {
      _this.setState({
        displayValue: _calc["default"].getSteps()
      });
    });

    var initialValue = "".concat(_this.props.initialValue);
    _this.state = {
      isVisible: false,
      inputValue: initialValue,
      internalValue: initialValue,
      displayValue: initialValue
    };
    _this.inputRef = /*#__PURE__*/_react["default"].createRef();
    _this.calcRef = /*#__PURE__*/_react["default"].createRef();

    _this.hydrateCalcBuffer(initialValue);

    return _this;
  }

  _createClass(NumericInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.addEventListener('keyup', this.onKeyUp);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('keyup', this.onKeyUp);
      clearTimeout(this.blurTimeout);
    }
  }, {
    key: "hydrateCalcBuffer",
    value: function hydrateCalcBuffer(value) {
      _calc["default"]['AC']();

      var calcBuffer = _toConsumableArray("".concat(value));

      while (calcBuffer.length) {
        _calc["default"][calcBuffer.shift()]();
      }
    }
  }, {
    key: "moveCursorToEnd",
    value: function moveCursorToEnd(state) {
      var length = 1 + new String(state.inputValue).length;
      this.inputRef.current.setSelectionRange(length, length);
    }
  }, {
    key: "render",
    value: function render() {
      var props = Object.assign({}, this.props);

      var _this$sanitizeRenderP = this.sanitizeRenderProps(props),
          labelProps = _this$sanitizeRenderP.label,
          labelPosition = _this$sanitizeRenderP.labelPosition,
          inputProps = _objectWithoutProperties(_this$sanitizeRenderP, _excluded);

      this.sanitizeRenderProps(props);
      var className = this.state.isVisible ? 'dflex' : 'dnone';

      var label = /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])('label', props.labelClassName),
        htmlFor: props.id
      }, props.label);

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "numeric-input-component"
      }, props.label && props.labelPosition == 'top' && label, /*#__PURE__*/_react["default"].createElement("input", _extends({
        className: props.className,
        onBlur: this.handleBlur,
        id: props.id,
        name: props.name,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        readOnly: true,
        ref: this.inputRef,
        type: "text",
        value: this.state.inputValue
      }, inputProps)), props.label && props.labelPosition == 'bottom' && label, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.calcRef,
        className: (0, _classnames["default"])('calculator-wrapper', className),
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement(_Calculator["default"], {
        onClose: this.handleClose,
        displayValue: this.state.displayValue,
        onChange: this.handleChange,
        onComplete: this.handleComplete
      })));
    }
  }]);

  return NumericInput;
}(_react.Component);

NumericInput.propTypes = {
  className: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  initialValue: _propTypes["default"].number,
  label: _propTypes["default"].string,
  labelClassName: _propTypes["default"].string,
  labelPosition: _propTypes["default"].oneOf(['top', 'bottom']),
  name: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
NumericInput.defaultProps = {
  labelPosition: 'top',
  initialValue: 0
};
var _default = NumericInput;
exports["default"] = _default;