import React from 'react'
import Radium from 'radium'

const digitStyle = {
    padding: '5px',
    width: '25px',
    height: '25px',
    background: 'grey',
}

@Radium
export default class Digits extends React.Component {
    constructor(props) {
        super(props)

        this.handleDigitClicked = number => event => {
            const {onDigit} = this.props
            if (onDigit) {
                onDigit(number)
            }
        }

    }

    createLabelRow(...args) {
        const labelRow = [...args].map(num =>
            <label style={digitStyle} key={num} onClick={this.handleDigitClicked(num)}>{num}</label>)
        return <div>
            {labelRow}
        </div>
    }

    render() {
        return <div>
            {this.createLabelRow(1,2,3)}
            {this.createLabelRow(4,5,6)}
            {this.createLabelRow(7,8,9)}
            {this.createLabelRow(0)}
        </div>
    }
}