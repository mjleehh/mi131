import io from 'socket.io-client'

export default function remoteActionServerMiddleware(sockets) {
    return store => next => action => {
        const state = next(action)
        sockets.emit('dispatch', action)
        return state
    }
}
