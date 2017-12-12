import {handleActions} from 'redux-actions'

import {
    addedNote,
    changedNote,
    removedNote,
} from '../../common/server-actions'

import {
    loggedIn,
    loggedOut,
    fetchedNotes,
    showAddNote,
    showEditNote,
    closeModal,
} from "./actions"

function initialState() {
    return {
        notes: [],
        modal: null,
        user: null,
    }
}

function loggedInReducer(state, {payload}) {
    return {...state, user: payload}
}

function loggedOutReducer(state) {
    return {...state, user: null}
}

function addNoteReducer(state, {payload}) {
    return {...state, notes: [...state.notes, payload]}
}

function changeNoteReducer(state, {payload}) {
    const notes = state.notes.map(note => note._id !== payload._id ? note : payload)
    return {...state, notes}
}

function removeNoteReducer(state, {payload}) {
    const notes = state.notes.filter(note => note._id !== payload)
    return {...state, notes}
}

function showAddNoteReducer(state) {
    const modal = {type: 'create'}
    return {...state, modal}
}

function showEditNoteReducer(state, {payload}) {
    const modal = {type: 'modify', id: payload}
    return {...state, modal}
}

function closeModalReducer(state) {
    return {...state, modal: null}
}

function fetchedNotesReducer(state, {payload}) {
    return {...state, notes: payload}
}

export default handleActions(
    {
        [loggedIn]: loggedInReducer,
        [loggedOut]: loggedOutReducer,
        [fetchedNotes]: fetchedNotesReducer,
        [addedNote]: addNoteReducer,
        [changedNote]: changeNoteReducer,
        [removedNote]: removeNoteReducer,
        [showAddNote]: showAddNoteReducer,
        [showEditNote]: showEditNoteReducer,
        [closeModal]: closeModalReducer,
    },
    initialState()
)
