import ReactDom from 'react-dom'
import React from 'react'

import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

import './style.css'
import reducer from './reducer'
import {changeMsg} from "./action"

// ignore me for now
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers()

const store = createStore(reducer, enhancer)

@connect()
class SetMsg extends React.Component {
    constructor(props) {
        super(props)

        this.state = {msg: 'some message'}

        this.handleChange = event => {
            this.setState({msg: event.target.value})
            event.preventDefault()
        }

        this.handleSubmit = event => {
            this.props.dispatch(changeMsg(this.state.msg))
            event.preventDefault()
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.msg} onChange={this.handleChange}/>
            <input type="submit" value="change message" />
        </form>
    }
}

@connect(state => ({msg: state.msg}))
class DisplayMsg extends React.Component {
    render() {
        return <div>{this.props.msg}</div>
    }
}

ReactDom.render(
    <Provider store={store}>
        <div>
            <SetMsg />
            <DisplayMsg />
        </div>
    </Provider>,
    document.getElementById('main'))

