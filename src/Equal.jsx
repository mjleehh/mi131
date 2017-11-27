import React from 'react'

import styleDefaults from './style'

const equalContainerStyle = {
    background: '#e10020',
    margin: styleDefaults.margin,
    height: styleDefaults.blockSize,
}

export default class Equal extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = event => {
            const {onClick} = this.props
            if (onClick) {
                onClick()
            }
        }
    }

    render() {
        return <div className="vert-center" style={equalContainerStyle} onClick={this.handleClick}>
            <div className="horiz-center">=</div>
           </div>
    }
}