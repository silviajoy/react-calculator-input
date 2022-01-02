import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import NumericKeys from './NumericKeys';
import NumericOps from './NumericOps';
import ConfirmButton from './ConfirmButton';
import CalculatorDisplay from './CalculatorDisplay';
import calc from './calc';

const Calculator = ({ onClose, displayValue, onChange, onComplete, className }) => {
  function handleNumberClick(number) {
    calc[number]();
    onChange();
  }

  function handleOperationClick(op) {
    calc[op]();
    onChange();
  }

  return (
    <div className={classnames('calculator', className)}>
      <div className="close">
        <button onClick={onClose}>X</button>
      </div>
      <div className="calculator-display">
        <CalculatorDisplay text={displayValue} />
      </div>
      <div className="calculator-keyboard">
        <NumericKeys onNumberClick={handleNumberClick} />
        <div className="calculator-right">
          <ConfirmButton confirmText="OK" onComplete={onComplete} />
          <NumericOps onOperationClick={handleOperationClick} />
        </div>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  onClose: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Calculator.defaultProps = {
  className: '',
};

export default Calculator;
