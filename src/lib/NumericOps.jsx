import React from 'react'
import KeyButton from './KeyButton'

var NumericOps = ({onOperationClick}) => {

    var keys = []
    var values = ["+","*","-","/"]
    for (var i = 0; i < values.length; i++) {
        keys.push(<KeyButton text={values[i]} onClick={onOperationClick} />)
    }

    var rows = [], size = 2;

    while (keys.length > 0)
        rows.push(keys.splice(0, size));

    return (
      <div className="numericops">
        <div className="numericops-row">
            {rows[0]}
        </div>

        <div className="numericops-row">
            {rows[1]}
        </div>

      </div>
    )
  }

export default NumericOps;
