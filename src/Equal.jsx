import React from 'react'
import {connect} from 'react-redux'

import styleDefaults from './style'
import {calculate} from "./actions"

const equalContainerStyle = {
    background: styleDefaults.footer,
    margin: styleDefaults.margin,
    height: styleDefaults.blockSize,
}

@connect()
export default class Equal extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = event => {
            this.props.dispatch(calculate())
            event.preventDefault()
        }
    }

    render() {
        return <div className="vert-center" style={equalContainerStyle} onClick={this.handleClick}>
            <div className="horiz-center">=</div>
           </div>
    }
}