import {handleActions} from 'redux-actions'

import {
    addedNote,
    changedNote,
    removedNote,
    showAddNote,
    showEditNote,
    closeModal,
} from 'src/common/actions'

function initialState() {
    return {
        notes: [],
        modal: null,
    }
}

function addNoteReducer(state, {payload}) {
    return {...state, notes: [...state.notes, payload]}
}

function changeNoteReducer(state, {payload: {id, patch}}) {
    const notes = state.notes.map(note => note.id !== id ? note : {...note, ...patch})
    return {...state, notes}
}

function removeNoteReducer(state, {payload}) {
    const notes = state.notes.filter(note => note.id !== payload)
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

function initialServerState(state, {payload}) {
    return payload
}

export default handleActions(
    {
        'INITIAL_SERVER_STATE': initialServerState,
        [addedNote]: addNoteReducer,
        [changedNote]: changeNoteReducer,
        [removedNote]: removeNoteReducer,
        [showAddNote]: showAddNoteReducer,
        [showEditNote]: showEditNoteReducer,
        [closeModal]: closeModalReducer,
    },
    initialState()
)
