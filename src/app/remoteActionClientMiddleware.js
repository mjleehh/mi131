import io from 'socket.io-client'

export default function remoteActionMiddleware(store) {
    const socket = io.connect('http://localhost:3000')
    socket.on('initial_state', state => {
        store.dispatch({type: 'INITIAL_SERVER_STATE', payload: state})
    })

    socket.on('dispatch', action => {
        store.dispatch(action)
    })

    return next => action => {
        if (action.isRemoteAction) {
            socket.emit('request_dispatch', action)
        }
        return next(action)
    }
}
