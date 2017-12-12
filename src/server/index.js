import express from 'express'
import http from 'http'
import io from 'socket.io'
import mongoose from 'mongoose'
import logger from 'morgan'
import bodyParser from 'body-parser'
import session, {MemoryStore} from 'express-session'
import passport from 'passport'
import passportSocketIo from 'passport.socketio'

import initUsers from './user'
import initNotes from './notes'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/notes', {useMongoClient: true})

const sessionSecret = 'very secret'
const sessionId = 'notes.sid'
const sessionStore = new MemoryStore()
const sessionSetup = {
    key: sessionId,
    secret: sessionSecret,
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    cookie: {}
}

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(session(sessionSetup))
app.use(passport.initialize())
app.use(passport.session())

const server = http.Server(app)
const socketServer = io(server)

socketServer.use(passportSocketIo.authorize({
    key: sessionId,
    secret: sessionSecret,
    store: sessionStore,
}))

socketServer.on('connection', (socket) => {
    socket.on('listen', () => {
        const user = socket.request.user
        for (let foo in socket.rooms) {
            socket.leave(foo)
        }
        socket.join(`${user}-events`)
    })
})

const emitAction = (user, action) => socketServer.in(`${user}-events`).emit('action', action)

const ensureAuthenticated = initUsers(app)
initNotes(app, ensureAuthenticated, emitAction)

server.listen(3000)
console.log('listening on :3000')
