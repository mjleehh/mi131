import {createAction} from 'redux-actions'
import createThunk from './createThunk'
import axios from 'axios'
import Listener from './Listener'


export const loggedIn = createAction('LOGGED_IN')
export const loggedOut = createAction('LOGGED_OUT')

export const showAddNote = createAction('SHOW_ADD_NOTE')
export const showEditNote = createAction('SHOW_EDIT_NOTE')
export const closeModal = createAction('CLOSE_MODAL')

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

export const prepareSession = createThunk('PREPARE_SESSION', (dispatch, email) => {
    dispatch(loggedIn(email))
    axios.get('/api/notes')
        .then(res => dispatch(fetchedNotes(res.data)))
        .then(() => Listener.listen())
        .catch(console.error)
})

export const fetchedNotes = createAction('FETCHED_NOTES')

export const fetchUser = createThunk('FETCH_USER', (dispatch) => {
    axios.get('/api/user')
        .then(res => dispatch(prepareSession(res.data)))
        .catch(() => dispatch(loggedOut()))
})

export const signUp = createThunk('SIGN_UP', (dispatch, login) => {
    axios.post('/api/signup', login)
        .then(res => {
            dispatch(prepareSession(res.data))
        })
        .catch(() => dispatch(loggedOut()))
})

export const logIn = createThunk('LOG_IN', (dispatch, login) => {
    axios.post('/api/login', login)
        .then(res => dispatch(prepareSession(res.data)))
        .catch(() => dispatch(loggedOut()))
})


