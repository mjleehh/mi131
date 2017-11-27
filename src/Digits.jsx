import React from 'react'
import styleDefaults from './style'

const digitContainterStyle = {
    width: styleDefaults.blockSize,
    height: styleDefaults.blockSize,
    margin: styleDefaults.margin,
    background: styleDefaults.digitButton,
}

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
        const labelRow = [...args].map((num, index) => {
            if (num !== null) {
                return <div className="vert-center" style={digitContainterStyle} key={index} onClick={this.handleDigitClicked(num)}>
                    <div className="horiz-center">{num}</div>
                </div>
            } else {
                return <div className="vert-center" style={digitContainterStyle} key={index} />
            }
        })

        return <div className="row">
            {labelRow}
        </div>
    }

    render() {
        return <div>
            {this.createLabelRow(1,2,3)}
            {this.createLabelRow(4,5,6)}
            {this.createLabelRow(7,8,9)}
            {this.createLabelRow('c', 0, '.')}
        </div>
    }
}