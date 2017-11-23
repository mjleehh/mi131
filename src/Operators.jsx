import React from 'react'

export default class Operators extends React.Component {
    constructor(props) {
        super(props)

        this.handleOperator = operator => event => {
            const {onOperator} = this.props
            if (onOperator) {
                onOperator(operator)
            }
        }

        this.handleEqual = event => {
            const {onEqual} = this.props
            if (onEqual) {
                onEqual()
            }
        }
    }

    render() {
        return <div>
            <div onClick={this.handleOperator('+')}>+</div>
            <div onClick={this.handleOperator('-')}>-</div>
            <div onClick={this.handleOperator('*')}>*</div>
            <div onClick={this.handleOperator('/')}>/</div>
            <div onClick={this.handleEqual}>=</div>
        </div>
    }
}