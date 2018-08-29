import React from 'react'

const ConfirmButton = ({onComplete, confirmText, backgroundColor}) => {

    return (
      <div className="confirmbutton" role="button" onClick={() => {onComplete('complete')}} style={{backgroundColor:backgroundColor}} >
        <p>{confirmText}</p>
      </div>
    )
}

export default ConfirmButton;
