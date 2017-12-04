import express from 'express'
import http from 'http'
import io from 'socket.io'
import {createStore, applyMiddleware} from 'redux'
import uuidV4 from 'uuid/v4'

import {
    addNote,
    addedNote,
    removeNote,
    removedNote,
    changeNote,
    changedNote,

} from 'src/common/actions'
import reducer from 'src/common/reducer'
import remoteActionServerMiddleware from "./remoteActionServerMiddleware"

const app = express()
const server = http.Server(app)
const socketServer = io(server)

const store = createStore(reducer, applyMiddleware(remoteActionServerMiddleware(socketServer.sockets)))

socketServer.on('connection', (socket) => {
    socket.emit('initial_state', store.getState())

    socket.on('request_dispatch', ({type, payload}) => {
        switch (type) {
            case addNote.toString(): {
                store.dispatch(addedNote({...payload, id: uuidV4()}))
                break
            }
            case changeNote.toString(): {
                store.dispatch(changedNote(payload))
                break
            }
            case removeNote.toString(): {
                store.dispatch(removedNote(payload))
                break
            }
            default:
                console.log('unknown action', type)
        }
    })
})

server.listen(3000)
console.log('listening on :3000')
