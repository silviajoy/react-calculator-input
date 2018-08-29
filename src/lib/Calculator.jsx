import React from 'react'
import NumericKeys from './NumericKeys'
import NumericOps from './NumericOps'
import ConfirmButton from './ConfirmButton'
import CalculatorDisplay from './CalculatorDisplay'

const Calculator = ({close, displayValue, onChangeDisplay, onComplete, backgroundColor, keyColor}) => {

    return (
            <div className="calculator" style={{backgroundColor: backgroundColor}}>
                <div className="close" onClick={close}>
                    <p>X</p>
                </div>
                <div className="calculator-display">
                    <CalculatorDisplay text={displayValue} />
                </div>
                <div className="calculator-keyboard">
                    <NumericKeys onNumberClick={(number) => {onChangeDisplay(number)}} leftKey="." rightKey="<" backgroundColor={keyColor} />
                    <div className="calculator-right">
                        <ConfirmButton confirmText="OK" onComplete={onComplete}  backgroundColor={keyColor}/>
                        <NumericOps onOperationClick={(op) => {onChangeDisplay(op)} }  backgroundColor={keyColor}/>
                    </div>
                </div>

            </div>
        );
  }

export default Calculator;
