import React from 'react'
import {connect} from 'react-redux'

@connect(state => ({notes: state.notes}))
export default class NoteList extends React.Component {
    render() {
        const renderedNotes = this.props.notes.map(note => <div key={note.id}>
                {note.title}

                <div>&#9998;</div>
            </div>)

        return <div className="column">
            {renderedNotes}
        </div>
    }
}