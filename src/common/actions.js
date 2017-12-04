import {createAction} from 'redux-actions'
import createThunk from './createThunk'
import axios from 'axios'

export const fetchedNotes = createAction('FETCHED_NOTES')

export const addNote = createThunk('ADD_NOTE', (dispatch, note) => {
    axios.post('/api/note', note)
})

export const changeTitle = createThunk('CHANGE_TITLE', (dispatch, {id, title}) => {
    axios.put(`/api/note/${id}/title`, {title})
})

export const changeBody = createThunk('CHANGE_BODY', (dispatch, {id, body}) => {
    axios.put(`/api/note/${id}/body`, {body})
})

export const removeNote = createThunk('REMOVE_NOTE', (dispatch, id) => {
    axios.delete(`/api/note/${id}`)
})

export const addedNote = createAction('ADDED_NOTE')
export const changedNote = createAction('CHANGED_NOTE')
export const removedNote = createAction('REMOVED_NOTE')

export const showAddNote = createAction('SHOW_ADD_NOTE')
export const showEditNote = createAction('SHOW_EDIT_NOTE')
export const closeModal = createAction('CLOSE_MODAL')
