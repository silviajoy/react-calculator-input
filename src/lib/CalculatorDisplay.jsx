import React from 'react';
import PropTypes from 'prop-types';

const CalculatorDisplay = ({ text }) => {
  return (
    <div className="display">
      <p>{text}</p>
    </div>
  );
};

CalculatorDisplay.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalculatorDisplay;
