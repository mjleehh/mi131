import React from 'react'
import keydown, {Keys} from 'react-keydown'

import Digits from './Digits'
import Display from './Display'
import Operators from './Operators'
import Equal from "./Equal"
import styleDefaults from "./style"

const initialValue = '0'

function performOperation(acc, b) {
    const {number} = acc
    const lhs = parseFloat(number)
    const rhs = parseFloat(b)

    switch (acc.operator) {
        case '+':
            return `${lhs + rhs}`
        case '-':
            return `${lhs - rhs}`
        case '*':
            return `${lhs * rhs}`
        case '/':
            return `${lhs / rhs}`
    }
    throw `invalid operator ${acc.operator}`
}

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


export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {number: initialValue, acc: null}

        this.handleDigitButton = digit => {
            if (digit === '.') {
                this.handleDot()
            } else if (digit === 'c') {
                this.handleC()
            } else {
                this.handleDigit(digit)
            }
        }

        this.handleDigit = digit => this.setState(prevState => {
            let number = prevState.number === initialValue
                ? digit.toString()
                : prevState.number + digit
            return {number}
        })

        this.handleDot = digit => this.setState(prevState => {
            let number = prevState.number.indexOf('.') !== -1
                ? prevState.number
                :  prevState.number + '.'
            return {number}
        })

        this.handleC = digit => this.setState(prevState => {
            let number = prevState.number.length < 2
                ? initialValue
                : prevState.number.slice(0, -1)
            return {number}
        })

        this.handleEqual = () => this.setState(prevState => {
            const {acc, number} = prevState
            if (acc) {

                const res = performOperation(acc, number)
                return {
                    acc: null,
                    number: res,
                }
            }
            return prevState
        })

        this.handleOperator = operator => this.setState(prevState => {
            const {acc, number} = prevState
            const res = acc
                ? performOperation(acc, number)
                : number
            return {
                acc: {
                    number: res,
                    operator: operator,
                },
                number: initialValue,
            }
        })

    }

    @keydown('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    handleNumberKey(event) {
        this.handleDigit(event.key)
        event.preventDefault()
    }

    @keydown('=', 'enter')
    handleEqualKey(event) {
        this.handleEqual()
        event.preventDefault()
    }

    @keydown('.')
    handleDotKey(event) {
        this.handleDot()
        event.preventDefault()
    }

    @keydown('c')
    handleCKey(event) {
        this.handleC()
        event.preventDefault()
    }

    @keydown('+', '-', '*', '/', 'shift+=', 'shift+8')
    handleOperatorKey(event) {
        this.handleOperator(event.key)
        event.preventDefault()
    }

    render() {
        const {number, acc} = this.state
        return <div className="column" style={appStyle}>
            <div style={headerStyle}>
                Calc
            </div>
            <div className="colum" style={contentStyle}>
                <div>
                    <Display number={number} acc={acc}/>
                </div>
                <div className="row">
                    <Digits onDigit={this.handleDigitButton} />
                    <Operators onOperator={this.handleOperator} onEqual={this.handleEqual} />
                </div>
                <Equal onClick={this.handleEqual} />
            </div>
        </div>
    }
}
