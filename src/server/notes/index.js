import Note from './Note'
import {
    addedNote,
    changedNote,
    removedNote,
} from '../../common/server-actions'

export default function initNotes(app, ensureAuthenticated, emitAction) {
    app.get('/notes', ensureAuthenticated, (req, res) => {
        Note.find({userId: req.user})
            .then(val => {
                res.send(val)
            })
            .catch(err => {
                res.status(500)
                res.send(err)
            })
    })

    app.post('/note', ensureAuthenticated, (req, res) => {
        const body = {...req.body, userId: req.user}
        const note = new Note(body)
        note.save()
            .then(val => {
                res.send(val)
                emitAction(req.user, addedNote(val))
            })
            .catch(err => {
                res.status(500)
                res.send(err)
            })
    })

    app.put('/note/:noteId/title', ensureAuthenticated, (req, res) => {
        const {noteId} = req.params
        const {title} = req.body
        Note.findOneAndUpdate({_id: noteId, userId: req.user}, {$set: {title}}, {new: true})
            .then(val => {
                res.send(val)
                emitAction(req.user, changedNote(val))
            })
            .catch(err => {
                res.status(500)
                res.send({error: err.message})
            })
    })

    app.put('/note/:noteId/body', ensureAuthenticated, (req, res) => {
        const {noteId} = req.params
        const {body} = req.body
        Note.findOneAndUpdate({_id: noteId, userId: req.user}, {$set: {body}}, {new: true})
            .then(val => {
                res.send(val)
                emitAction(req.user, changedNote(val))
            })
            .catch(err => {
                res.status(500)
                res.send({error: err.message})
            })
    })

    app.delete('/note/:noteId', ensureAuthenticated, (req, res) => {
        const {noteId} = req.params
        Note.remove({_id: noteId, userId: req.user})
            .then(() => {
                res.send({id: noteId})
                emitAction(req.user, removedNote(noteId))
            })
            .catch(err => {
                res.status(500)
                res.send({error: err.message})
            })
    })
}
