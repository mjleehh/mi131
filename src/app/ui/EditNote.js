import React from 'react'
import {connect} from 'react-redux'

import {changeTitle, changeBody} from "../state/actions"

@connect(state => ({notes: state.notes}))
export default class EditNote extends React.Component {
    constructor(props) {
        super(props)

        this.handleTitleChange = event => {
            const {dispatch, id} = this.props
            this.props.dispatch(changeTitle({id, title: event.target.value}))
        }

        this.handleBodyChange = event => {
            const {dispatch, id} = this.props
            this.props.dispatch(changeBody({id, body: event.target.value}))
        }
    }

    render() {
        const note = this.props.notes.find(note =>  note._id === this.props.id)

        return <div className="column">
            <div>
                Title: <input type="text" value={note.title} onChange={this.handleTitleChange} />
            </div>
            <div>
                Content: <input type="text" value={note.body} onChange={this.handleBodyChange} />
            </div>
        </div>
    }
}