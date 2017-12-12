import React from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import App from "./App"

@connect(state => ({user: state.user}))
export default class LoginFrame extends React.Component {
    render() {
        if (!this.props.user) {
            return <Login />
        } else {
            return <App appElement={this.props.appElement} />
        }
    }
}
