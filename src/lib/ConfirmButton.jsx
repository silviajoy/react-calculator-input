import React from 'react'

const ConfirmButton = ({onComplete, confirmText}) => {

    return (
      <div className="confirmbutton" role="button" onClick={() => {onComplete('complete')}}>
        <p>{confirmText}</p>
      </div>
    )
}

export default ConfirmButton;
