
import express from 'express'
import http from 'http'
import io from 'socket.io'
import uuidV4 from 'uuid/v4'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import {
    addedNote,
    removedNote,
    changedNote,

} from 'src/common/actions'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/notes', {useMongoClient: true})

const app = express()
app.use(bodyParser.json())
const server = http.Server(app)
const socketServer = io(server)


const Note = mongoose.model('note', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: String,
}))

app.get('/notes', (req, res) => {
    Note.find({})
        .then(val => {
            res.send(val)
        })
        .catch(err => {
            res.status(500)
            res.send(err)
        })
})

app.post('/note', (req, res) => {
    const body = {...req.body, id: uuidV4()}
    const note = new Note(body)
    note.save()
        .then(val => {
            res.send(val)
            socketServer.in('notes').emit('notes_action', addedNote(val))
        })
        .catch(err => {
            res.status(500)
            res.send(err)
        })
})

app.post('/note', (req, res) => {
    const body = {...req.body, id: uuidV4()}
    const note = new Note(body)
    note.save()
        .then(val => {
            res.send(val)
            socketServer.in('notes').emit('notes_action', addedNote(val))
        })
        .catch(err => {
            res.status(500)
            res.send(err)
        })
})

app.put('/note/:noteId/title', (req, res) => {
    const {noteId} = req.params
    const {title} = req.body
    Note.findOneAndUpdate({_id: noteId}, {$set: {title}}, {new: true})
        .then(val => {
            res.send(val)
            console.log(val)
            socketServer.in('notes').emit('notes_action', changedNote(val))
        })
        .catch(err => {
            res.status(500)
            res.send({error: err.message})
        })
})

app.put('/note/:noteId/body', (req, res) => {
    const {noteId} = req.params
    const {body} = req.body
    Note.findOneAndUpdate({_id: noteId}, {$set: {body}}, {new: true})
        .then(val => {
            res.send(val)
            socketServer.in('notes').emit('notes_action', changedNote(val))
        })
        .catch(err => {
            res.status(500)
            res.send({error: err.message})
        })
})

app.delete('/note/:noteId', (req, res) => {
    const {noteId} = req.params
    Note.remove({_id: noteId})
        .then(() => {
            res.send({id: noteId})
            socketServer.in('notes').emit('notes_action', removedNote(noteId))
        })
        .catch(err => {
            res.status(500)
            res.send({error: err.message})
        })
})

socketServer.on('connection', (socket) => {
    socket.on('notes', () => {
        socket.join('notes')
    })
})

server.listen(3000)
console.log('listening on :3000')
