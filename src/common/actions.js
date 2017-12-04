import {createAction} from 'redux-actions'
import createRemoteAction from './createRemoteAction'

export const addNote = createRemoteAction('ADD_NOTE')
export const changeNote = createRemoteAction('CHANGE_NOTE')
export const removeNote = createRemoteAction('REMOVE_NOTE')

export const addedNote = createAction('ADDED_NOTE')
export const changedNote = createAction('CHANGED_NOTE')
export const removedNote = createAction('REMOVED_NOTE')

export const showAddNote = createAction('SHOW_ADD_NOTE')
export const showEditNote = createAction('SHOW_EDIT_NOTE')
export const closeModal = createAction('CLOSE_MODAL')
