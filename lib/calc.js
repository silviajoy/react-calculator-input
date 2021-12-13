"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var result, steps, nextDot;
initialize();

function initialize() {
  setResultToZero();
  steps = [];
  nextDot = false;
}

var ALL_NUMERICS = {}; // [0..9]

new Array(10).fill(0).forEach(function (_, index) {
  ALL_NUMERICS[index] = function () {
    if (nextDot) {
      nextDot = false;
      result = parseFloat(result.toString() + '.' + index);
    } else {
      if (!hasDotInResult()) {
        result = result * 10 + index;
      } else {
        result = parseFloat(result.toString() + index);
      }
    }
  };
});
var ALL_OPERATORS = {};
['+', '-', '*', '/'].forEach(function (op) {
  ALL_OPERATORS[op] = function () {
    if (!isResultZero()) {
      steps.push(getFormattedResult());
    } else if (!hasSteps()) {
      steps.push('0');
    }

    setResultToZero();

    if (isAnOperator(getLastFrom(steps))) {
      steps[steps.length - 1] = op;
    } else {
      steps.push(op);
    }
  };
});
var _exports = {
  AC: function AC() {
    initialize();
  },
  CE: function CE() {
    if (isResultZero()) {
      var removed = steps.splice(-1, 1);

      if (isAnOperator(removed)) {
        result = steps.splice(-1, 1);
      }
    } else {
      setResultToZero();
    }
  },
  BS: function BS() {
    var resultAsString = result.toString();

    if (isResultZero()) {
      var removed = steps.splice(-1, 1);

      if (isAnOperator(removed)) {
        result = steps.splice(-1, 1);
      }
    } else {
      if (nextDot) {
        nextDot = false;
      } else if (hasDotInResult()) {
        var tempResult = getResultInStringWithoutLastCharacter();

        if (tempResult.slice(-1) === '.') {
          nextDot = true;
          tempResult = getResultInStringWithoutLastCharacter();
        }

        result = parseFloat(tempResult);
      } else {
        result = parseInt(result / 10);
      }
    }

    function getResultInStringWithoutLastCharacter() {
      return resultAsString.slice(0, -1);
    }
  },
  '.': function _() {
    if (!hasDotInResult()) {
      nextDot = true;
    }
  },
  '=': function _() {
    function getProcessedSteps() {
      if (isResultZero() && isAnOperator(steps.slice(-1)[0])) {
        steps.splice(-1, 1);
      }

      return _exports.getSteps();
    }

    if (!isResultZero() || hasSteps()) {
      var str_steps = getProcessedSteps(); //  Simple, but probably unsafe way is to use eval, but it is really simple one-liner.....

      result = eval(str_steps); // jshint ignore:line

      steps = [];
    } else {
      setResultToZero();
    }
  },
  '+/-': function _() {
    result *= -1;
  },
  // getters
  getResult: function getResult() {
    return resultAndAddDotIfNextDot();
  },
  getSteps: function getSteps() {
    return steps.join('') + getFormattedResult();
  },
  getLastOperator: function getLastOperator() {
    var lastOperators = steps.filter(function (step) {
      return step in ALL_OPERATORS;
    });

    function hasLastOperators() {
      return lastOperators.length > 0;
    }

    return hasLastOperators() ? getLastFrom(lastOperators) : '';
  }
};
[ALL_NUMERICS, ALL_OPERATORS].forEach(function (obj) {
  Object.keys(obj).forEach(function (key) {
    _exports[key] = obj[key];
  });
});

function hasSteps() {
  return steps.length > 0;
}

function hasDotInResult() {
  return result.toString().indexOf('.') !== -1;
}

function isResultZero() {
  return result === 0;
}

function setResultToZero() {
  result = 0;
}

function isAnOperator(str) {
  return str in ALL_OPERATORS;
}

function getLastFrom(array) {
  return array.slice(-1)[0];
}

function getFormattedResult() {
  if (isResultZero()) {
    return '';
  } else {
    var resultAsString = result.toString();

    if (hasSteps() && result < 0) {
      return '(' + resultAsString + ')';
    } else {
      return resultAsString;
    }
  }
}

function resultAndAddDotIfNextDot() {
  return result.toString() + (nextDot ? '.' : '');
}

var _default = _exports;
exports["default"] = _default;