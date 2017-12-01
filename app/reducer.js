import {handleActions} from 'redux-actions'

import {
    addNote,
    removeNote,
    showAddNote,
    showEditNote,
    closeModal,
} from './action'

function initialState() {
    return {
        notes: [],
        modal: null,
    }
}

function addNoteReducer(state, {payload}) {
    return {...state, notes: [...state.notes, payload]}
}

function removeNoteReducer(state, {payload}) {
    const notes = state.notes.filter(note => note.id !== payload)
    return {...state, notes}
}

function showAddNoteReducer(state) {
    const modal = {type: 'create'}
    return {...state, modal}
}

function showEditNoteReducer(state, payload) {
    const modal = {type: 'create', id: payload}
    return {...state, modal}
}

function closeModalReducer(state) {
    return {...state, modal: null}
}

export default handleActions(
    {
        [addNote]: addNoteReducer,
        [removeNote]: removeNoteReducer,
        [showAddNote]: showAddNoteReducer,
        [showEditNote]: showEditNoteReducer,
        [closeModal]: closeModalReducer,
    },
    initialState()
)
