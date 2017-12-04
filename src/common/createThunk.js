import {createAction} from 'redux-actions'

export default function createThunk(type, f) {
    const actionCreator = payload => dispatch => f(dispatch, payload)
    actionCreator.toString = () => type
    return actionCreator
}
