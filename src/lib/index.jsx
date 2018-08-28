import React, { Component } from "react"
import Calculator from './Calculator'
import './index.scss'

class NumericInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            className: "dnone",
            inputValue: "",
            displayValue: "0",
        };
        this.inputRef = React.createRef();
    }

    onFocus = () => {
        this.setState({className:"dflex"})
    }

    onComplete = () => {
        var total = eval(this.state.displayValue)
        this.setState({className:"dnone", inputValue:total})
        this.inputRef.current.value = total
        this.proxyOnChangeOnRef(this.inputRef);
    }

    onChangeDisplay = (val) => {
        var currentVal = this.state.displayValue
        var newValue = val.toString()

        /* delete */
        if(val==='<') {
            newValue = currentVal.slice(0,-1)
            if(newValue == '') {
                newValue = '0'
            }
            this.setState({displayValue: newValue})
            return
        }

        /* avoid double . insertion */
        if(val==='.' && currentVal.includes(".")){
            return
        }

        /* if it's not the first character or if next value is . */
        if(currentVal != '0' || val == '.') {
            if(currentVal == '') {
                newValue = `0${val}`
            } else {
                newValue = `${currentVal}${val}`;    
            }
        }

        this.setState({displayValue:newValue})
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value, displayValue: event.target.value});
        this.proxyOnChangeOnRef(this.inputRef);
    }

    onBlur = () => {
        setTimeout(() => {
            var active = document.activeElement
            if(!active.classList.contains("calculator-wrapper") || active.id == this.props.id) {
                this.setState({className:"dnone"})
        }
        }, 1);

    }

    onClose = () => {
        this.setState({className:"dnone"})
    }

    proxyOnChangeOnRef(ref) {
        if (typeof this.props.onChange !== 'function') return;
        const event = new Event('change', { bubbles: true });
        Object.defineProperty(event, 'target', {value: ref.current, enumerable: true});
        this.props.onChange(event);
    }

    render() {

        return (
            <div className="numeric-input-component">
                <input
                    ref={this.inputRef}
                    id={this.props.id}
                    className={this.props.className}
                    type="number"
                    name={this.props.name}
                    onFocus={ this.onFocus }
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onBlur={this.onBlur}
                />
                {this.props.label ? (<label htmlFor={this.props.id}>{this.props.label}</label>) : null}
                <div className={ "calculator-wrapper " + this.state.className } tabIndex="-1">
                    <Calculator
                        onComplete={ this.onComplete }
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
