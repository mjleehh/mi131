import React from 'react'
import keydown, {Keys} from 'react-keydown'
import {connect} from 'react-redux'

import Digits from './Digits'
import Display from './Display'
import Operators from './Operators'
import Equal from "./Equal"
import styleDefaults from "./style"
import {addDigit, calculate, removeDigit, setDot, setOperator} from "./actions"


const appStyle = {
    display: 'inline-block',
}

const headerStyle = {
    color: styleDefaults.lightFontColor,
    fontFamily: styleDefaults.fontFamily,
    background: styleDefaults.headerPrimary,
    padding: styleDefaults.margin,
}

const contentStyle = {
    background: styleDefaults.headerSecondary,
    padding: styleDefaults.margin,
}

@connect()
export default class App extends React.Component {
    @keydown('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    handleNumberKey(event) {
        this.props.dispatch(addDigit(event.key))
        event.preventDefault()
    }

    @keydown('=', 'enter')
    handleEqualKey(event) {
        this.props.dispatch(calculate())
        event.preventDefault()
    }

    @keydown('.')
    handleDotKey(event) {
        this.props.dispatch(setDot())
        event.preventDefault()
    }

    @keydown('c', 'backspace')
    handleCKey(event) {
        this.props.dispatch(removeDigit())
        event.preventDefault()
    }

    @keydown('+', '-', '*', '/', 'shift+=', 'shift+8')
    handleOperatorKey(event) {
        this.props.dispatch(setOperator(event.key))
        event.preventDefault()
    }

    render() {
        return <div className="column" style={appStyle}>
            <div style={headerStyle}>
                Calc
            </div>
            <div className="colum" style={contentStyle}>
                <div>
                    <Display/>
                </div>
                <div className="row">
                    <Digits />
                    <Operators />
                </div>
                <Equal />
            </div>
        </div>
    }
}
