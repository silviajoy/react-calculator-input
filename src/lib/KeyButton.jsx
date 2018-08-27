import React from 'react'

var KeyButton = ({onClick, text}) => {

    return (
            <div className="button" role="button" onClick={() => {onClick(text)}}> 
                <p>{text}</p>
            </div>
    )
}

export default KeyButton;
