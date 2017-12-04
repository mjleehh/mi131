import io from 'socket.io-client'

export default function notesListener(store) {
    const socket = io.connect('http://localhost:3000')
    socket.emit('notes')
    socket.on('notes_action', action => store.dispatch(action))
}
