import React from 'react'
import {connect} from 'react-redux'
import {removeMemo} from "./actions"


@connect()
export default class Memo extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemove = () => {
            const {dispatch, id} = this.props
            dispatch(removeMemo(id))
        }
    }

    render() {
        const {title, text} = this.props
        return <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                {text}
            </div>
            <div>
                <button onClick={this.handleRemove}>delete</button>
            </div>
        </div>
    }
}
