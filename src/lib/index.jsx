import React, { Component } from "react"
import Calculator from './Calculator'

class NumericInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            className: "dnone",
            inputValue: 0,
            displayValue: "0",
        };
        this.inputRef = React.createRef();
    }

    onFocus = () => {
        this.setState({className: "dflex"});
    }

    onComplete = () => {
        var total = eval(this.state.displayValue).toFixed(4);
        const parsedValue = this.props.format === 'integer'
            ? parseInt(total, 10)
            : parseFloat(total);
        this.setState(
            {className:"dnone", inputValue: parsedValue, displayValue: parsedValue.toString()},
            this.proxyOnChangeOnRefWithValue(this.inputRef, parsedValue)
        );
    }

    onChangeDisplay = (val) => {
        var currentVal = this.state.displayValue
        var newValue = val.toString()


        /* delete */
        if(val==='<') {
            newValue = currentVal.slice(0,-1)
            /* avoid blank screen */
            if(newValue == '') {
                newValue = '0'
            }
            this.setState({displayValue: newValue});
            return
        }

        /* avoid double . insertion */
        var lastNumber = currentVal.split(/\-|\+|\/|\*/).pop()
        if(val==='.' && lastNumber.includes(".")){
            return
        }

        /* if it's not the first character or if next value is . */  
        if (currentVal != '0' || val == '.') {
            if(currentVal == '') {
                newValue = `0${val}`
            } else {
                newValue = `${currentVal}${val}`;    
            }
        }

        var lastCharacter = currentVal.split('').pop()
        if(['+', '-', '*', '/'].includes(lastCharacter)) {
          /* avoid consecutive operation insertion */
          if(['+', '-', '*', '/'].includes(val)) {
              newValue = `${currentVal.slice(0,-1)}${val}`
          }
        } 

        this.setState({displayValue:newValue});
    }

    handleChange = (event) => {
        const parsedValue = this.props.format === 'integer'
            ? parseInt(event.target.value, 10)
            : parseFloat(event.target.value);
        const value = isNaN(parsedValue) ? 0 : parsedValue;
        const stringValue = value.toString();
        this.setState(
            {inputValue: value, displayValue: stringValue},
            this.proxyOnChangeOnRefWithValue(this.inputRef, value)
        );
    }

    onBlur = () => {
        setTimeout(() => {
            var active = document.activeElement
            if(!active.classList.contains("calculator-wrapper") || active.id == this.props.id) {
                this.setState({className: "dnone"});
            }
        }, 1);

    }

    onClose = () => {
        this.setState({className:"dnone"})
    }

    proxyOnChangeOnRefWithValue = (ref, value) => {
        if (typeof this.props.onChange !== 'function') return;
        const event = new Event('change', { bubbles: true });
        Object.defineProperty(event, 'target', {value: ref.current, enumerable: true, writable: true});
        event.target.value = value.toString();
        this.props.onChange(event);
    }

    sanitizeRenderProps = (props) => {
        delete props.ref;
        delete props.type;
        delete props.onFocus;
        delete props.onChange;
        delete props.onBlur;
        return props;
    }

    render() {
        const props = Object.assign({}, this.props);
        const { label: labelProps, ...inputProps } = this.sanitizeRenderProps(props);
        return (
            <div className="numeric-input-component">
                <input
                    ref={this.inputRef}
                    id={props.id}
                    className={props.className}
                    type="number"
                    name={props.name}
                    onFocus={this.onFocus}
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                    {...inputProps}
                />
                {props.label ? (<label htmlFor={props.id}>{props.label}</label>) : null}
                <div className={ "calculator-wrapper " + this.state.className } tabIndex="-1">
                    <Calculator
                        onComplete={this.onComplete}
                        displayValue={this.state.displayValue}
                        onChangeDisplay={this.onChangeDisplay}
                        close={this.onClose}
                    />
                </div>
            </div>
        );
    }
}

export default NumericInput;
