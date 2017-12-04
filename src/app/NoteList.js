import React from 'react'
import {connect} from 'react-redux'
import {removeNote, showEditNote} from "../common/actions"

@connect(state => ({notes: state.notes}))
export default class NoteList extends React.Component {
    constructor(props) {
        super(props)

        this.handleEdit = id => event => {
            this.props.dispatch(showEditNote(id))
        }

        this.handleDelete = id => event => {
            this.props.dispatch(removeNote(id))
        }
    }

    render() {
        const renderedNotes = this.props.notes.map(note => <div className="row" key={note._id}>
            {note.title}
            <div className="icon" onClick={this.handleEdit(note._id)}>
                    &#9998;
            </div>
            <div className="icon" onClick={this.handleDelete(note._id)}>
                &#x274c;
            </div>
        </div>)

        return <div className="column">
            {renderedNotes}
        </div>
    }
}
