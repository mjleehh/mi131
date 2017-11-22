import React from 'react'
import {connect} from 'react-redux'
import {addMemo, hideAddMemo} from "./actions"

@connect()
export default class AddMemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {title: '', text: ''}

        this.handleTitleChange = event => this.setState({title: event.target.value})
        this.handleTextChange = event => this.setState({text: event.target.value})

        this.handleAdd = event => {
            const {title, text} = this.state
            this.props.dispatch(addMemo({title, text}))
            this.props.dispatch(hideAddMemo())
            event.preventDefault()
        }

        this.handleCancel = () => {
            this.props.dispatch(hideAddMemo())
        }
    }

    render() {
        const {title, text} = this.state

        return <form onSubmit={this.handleAdd}>
            <div>
                <h3>title: </h3>
                <input type="text" value={title} onChange={this.handleTitleChange}/>
            </div>
            <div>
                <h3>text:</h3>
                <input type="text" value={text} onChange={this.handleTextChange}/>
            </div>
            <div>
                <input type="submit" value="add" />
                <button onClick={this.handleCancel}>cancel</button>
            </div>
        </form>
    }
}
