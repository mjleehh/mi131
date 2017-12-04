import {createAction} from 'redux-actions'

export default function createRemoteAction(type) {
    const isRemoteAction = true
    const actionCreator = (payload) => ({type, payload, isRemoteAction})
    actionCreator.toString = () => type
    actionCreator.isRemoteAction = true
    return actionCreator
}