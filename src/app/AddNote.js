import React from 'react'
import {connect} from 'react-redux'

import {addNote, closeModal} from "../common/actions"

@connect()
export default class AddNote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {title: '', body: ''}

        this.handleTitleChange = event => this.setState({title: event.target.value})
        this.handleBodyChange = event => this.setState({body: event.target.value})

        this.handleSubmit = event => {
            this.props.dispatch(addNote(this.state))
            this.props.dispatch(closeModal())
            event.preventDefault()
        }
    }

    render() {
        return <form className="column" onSubmit={this.handleSubmit}>
            <div>
                Title: <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div>
                Content: <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
            </div>
            <input type="submit" value="add"/>
        </form>
    }
}