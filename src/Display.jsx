import React from 'react'
import styleDefaults from "./style"

const lcdStyle = {
    borderColor: styleDefaults.darkFontColor,
    margin: styleDefaults.margin,
    border: '1px solid',
    background: styleDefaults.lcd,
}

const accLineStyle = {
    justifyContent: 'flex-end',
    ...lcdStyle
}

const numberLineStyle = {
    justifyContent: 'space-between',
    ...lcdStyle
}

const textBoxStyle = {
    height: styleDefaults.blockSize,
    marginRight: styleDefaults.margin,
    marginLeft: styleDefaults.margin,
}

export default class Display extends React.Component {
    render() {
        const {acc, number} = this.props

        let accNumber = acc ? `${acc.number}` : ''
        let operator = acc ? `${acc.operator}` : ''

        return <div className="colum">
            <div className="row" style={accLineStyle}>
                <div className="vert-center" style={textBoxStyle}>{accNumber}</div>
            </div>
            <div className="row" style={numberLineStyle}>
                <div className="vert-center" style={textBoxStyle}>{operator}</div>
                <div className="vert-center" style={textBoxStyle}>{number}</div>
            </div>
        </div>
    }
}
