import React from 'react'
import {connect} from 'react-redux'
import {logIn, signUp} from '../state/actions'

@connect()
export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {mode: 'login', email: '', password: ''}

        this.handleEmailChange = event => this.setState({email: event.target.value})
        this.handlePasswordChange = event => this.setState({password: event.target.value})

        this.handleLogup = event => {
            const {dispatch} = this.props
            const {email, password} = this.state
            if (this.state.mode === 'signup') {
                dispatch(signUp({email, password}))
            } else {
                dispatch(logIn({email, password}))
            }
            event.preventDefault()
        }

        this.setMode = mode => event => this.setState({mode})
    }

    render() {
        const isSignup = this.state.mode === 'signup'

        return <div>
            <form onSubmit={this.handleLogup}>
                <div>
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div>
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <div>
                    <input type="submit" value={this.state.mode}/>
                    <input hidden={!isSignup} type="button" value="cancel" onClick={this.setMode('login')}/>
                </div>
                <div>
                    <a hidden={isSignup} onClick={this.setMode('signup')}>signup</a>
                </div>
            </form>
        </div>
    }
}
