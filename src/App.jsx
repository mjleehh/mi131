import React from 'react'

import Digits from './Digits'
import Display from './Display'
import Operators from './Operators'

function performOperation(acc, b) {
    const {number} = acc
    switch (acc.operator) {
        case '+':
            return number + b
        case '-':
            return number - b
        case '*':
            return number * b
        case '/':
            return number / b
    }
    throw `invalid operator ${acc.operator}`
}

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {number: 0, acc: null}

        this.handleDigit = number => this.setState(prevState => ({number: prevState.number * 10 + number}))
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
                number: 0,
            }
        })
    }

    render() {
        const {number, acc} = this.state
        return <div>
            <Display number={number} acc={acc}/>
            <Digits onDigit={this.handleDigit} />
            <Operators onOperator={this.handleOperator} onEqual={this.handleEqual} />
        </div>
    }
}