import React from 'react'
import {connect} from 'react-redux'
import styleDefaults from './style'
import {setOperator} from "./actions"

const operatorContainerStyle = {
    width: styleDefaults.blockSize,
    height: styleDefaults.blockSize,
    margin: styleDefaults.margin,
    background: styleDefaults.operatorButton,
}

const operatorStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
}

@connect()
export default class Operators extends React.Component {
    constructor(props) {
        super(props)

        this.handleOperator = operator => event => {
            this.props.dispatch(setOperator(operator))
            event.preventDefault()
        }
    }

    createOperatorButton(text) {
        return <div><div className="vert-center" style={operatorContainerStyle} onClick={this.handleOperator(text)}>
            <div style={operatorStyle}>{text}</div>
        </div></div>
    }

    render() {
        return <div className="colum">
            {this.createOperatorButton('+')}
            {this.createOperatorButton('-')}
            {this.createOperatorButton('*')}
            {this.createOperatorButton('/')}
        </div>
    }
}
