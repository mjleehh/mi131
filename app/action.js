import {createAction} from 'redux-actions'

export const addNote = createAction('ADD_NOTE')
export const removeNote = createAction('REMOVE_NOTE')
export const showAddNote = createAction('SHOW_ADD_NOTE')
export const showEditNote = createAction('SHOW_EDIT_NOTE')
export const closeModal = createAction('CLOSE_MODAL')