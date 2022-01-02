import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

var KeyButton = ({ className, onClick, text }) => {
  return (
    <div
      className={classnames('button', className)}
      role="button"
      onClick={() => {
        onClick(text);
      }}
    >
      <p>{text}</p>
    </div>
  );
};

KeyButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

KeyButton.defaultProps = {
  className: '',
};

export default KeyButton;
