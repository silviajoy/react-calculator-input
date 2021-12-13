import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';
import classnames from 'classnames';

const numericKeysClassMap = {
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
  9: 'num-key-nine',
};

const numericKeysOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'CE'];

const NumericKeys = ({ onNumberClick, className }) => {
  const unused = 'error';
  const keys = numericKeysOrder.map((key) => (
    <KeyButton
      key={`num-key-${numericKeysClassMap[key]}`}
      text={`${key}`}
      onClick={onNumberClick}
      className={classnames(numericKeysClassMap[key], className)}
    />
  ));

  var rows = [],
    size = 3;

  while (keys.length > 0) rows.push(keys.splice(0, size));

  return (
    <div className="numerickeys">
      <div className="numerickeys-row">{rows[0]}</div>

      <div className="numerickeys-row">{rows[1]}</div>

      <div className="numerickeys-row">{rows[2]}</div>

      <div className="numerickeys-row">{rows[3]}</div>
    </div>
  );
};

NumericKeys.propTypes = {
  className: PropTypes.string,
  onNumberClick: PropTypes.func.isRequired,
};

NumericKeys.defaultProps = {
  className: '',
};

export default NumericKeys;
