import io from 'socket.io-client'

class Listener {
    listen() {
        if (this.store) {
            const socket = io.connect('http://localhost:3000/')
            socket.emit('listen')
            socket.on('action', action => this.store.dispatch(action))
        } else {
            console.error('no store preset, not listening')
        }
    }

    setStore(store) {
        this.store = store
    }
}

export default new Listener()