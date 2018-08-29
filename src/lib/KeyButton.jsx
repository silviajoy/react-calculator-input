import React from 'react'

var KeyButton = ({onClick, text, backgroundColor}) => {
    
    return (
            <div className="button" role="button" onClick={() => {onClick(text)}} style={{backgroundColor: backgroundColor}} > 
                <p>{text}</p>
            </div>
    )
}

export default KeyButton;
