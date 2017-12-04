import React from 'react'
import {connect} from 'react-redux'
import uuidV4 from 'uuid/v4'

import {addNote, changeNote} from "../common/actions"

@connect(state => ({notes: state.notes}))
export default class EditNote extends React.Component {
    constructor(props) {
        super(props)

        this.handleTitleChange = event => {
            const {dispatch, id} = this.props
            this.props.dispatch(changeNote({id, patch: {title: event.target.value}}))
        }

        this.handleBodyChange = event => {
            const {dispatch, id} = this.props
            this.props.dispatch(changeNote({id, patch: {body: event.target.value}}))
        }
    }

    render() {
        const note = this.props.notes.find(note =>  note.id === this.props.id)

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