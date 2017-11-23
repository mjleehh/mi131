import React from 'react'

import Digits from './Digits'
import Display from './Display'

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {number: 123}

        this.handleDigit = number => this.setState(prevState => ({number: prevState.number * 10 + number}))
    }

    render() {
        return <div>
            <Display number={this.state.number}/>
            <Digits onDigit={this.handleDigit} />
        </div>
    }
}