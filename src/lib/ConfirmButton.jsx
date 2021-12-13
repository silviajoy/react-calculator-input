import React from 'react';
import PropTypes from 'prop-types';

const ConfirmButton = ({ onComplete, confirmText }) => {
  return (
    <div
      className="confirmbutton"
      role="button"
      onClick={() => {
        onComplete('complete');
      }}
    >
      <p>{confirmText}</p>
    </div>
  );
};

ConfirmButton.propTypes = {
  className: PropTypes.string,
  confirmText: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
};

ConfirmButton.defaultProps = {
  className: '',
};

export default ConfirmButton;
