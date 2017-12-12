import {createAction} from 'redux-actions'
import createThunk from '../app/state/createThunk'
import axios from 'axios'

export const addedNote = createAction('ADDED_NOTE')
export const changedNote = createAction('CHANGED_NOTE')
export const removedNote = createAction('REMOVED_NOTE')