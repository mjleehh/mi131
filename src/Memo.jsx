import React from 'react'

export default class Memo extends React.Component {
    constructor(props) {
        super(props)

        this.handleRemove = () => {
            const {id, remove} = this.props
            if (remove) {
                remove(id)
            }
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
