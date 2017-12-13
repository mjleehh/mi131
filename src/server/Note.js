import * as graphql from 'graphql'
import uuidV4 from 'uuid/v4'

import {usersCollection, notesCollection} from './db'

export const NoteType = new graphql.GraphQLObjectType({
    name: 'note',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        user: {
            type: graphql.GraphQLID,
        },
        title: {
            type: graphql.GraphQLString,
        },
        body: {
            type: graphql.GraphQLString,
        },
    })
})

export const addNote = {
    type: NoteType,
    description: 'add a note',
    args: {
        user: {
            name: 'note owner',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        },
        title: {
            name: 'note title',
            type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        },
        body: {
            name: 'note body',
            type: graphql.GraphQLString,
        },
    },
    resolve: (root, {user, title, body}) => {
        return new Promise((resolve, reject) => {
            if (!usersCollection.get().some(knwownUser => knwownUser.id === user)) {
                reject(`invalid user ${user}`)
                return
            }
            const note = {
                id: uuidV4(),
                user,
                title,
                body,
            }
            notesCollection.set([...notesCollection.get(), note])
            resolve(note)
        })
    },
}

export const changeNote = {
    type: NoteType,
    description: 'change a note body',
    args: {
        id: {
            name: 'note ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        },
        title: {
            name: 'note title',
            type: graphql.GraphQLString,
        },
        body: {
            name: 'note body',
            type: graphql.GraphQLString,
        },
    },
    resolve: (root, {id, title, body}) => {
        return new Promise((resolve, reject) => {
            const notes = notesCollection.get()
            const noteIndex = notes.findIndex(note => note.id === id)
            if (noteIndex < 0) {
                reject(`invalid node ID ${id}`)
                return
            }
            const note = {...notes[noteIndex]}
            if (title) {
                note.title = title
            }
            if (body) {
                note.body = body
            }
            const newNotes = [...notes]
            newNotes[noteIndex] = note
            notesCollection.set(newNotes)
            resolve(note)
        })
    },
}

export const deleteNote = {
    type: graphql.GraphQLID,
    description: 'change a note body',
    args: {
        id: {
            name: 'note ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID),
        }
    },
    resolve: (root, {id}) => {
        return new Promise((resolve, reject) => {
            const notes = notesCollection.get()
            const noteIndex = notes.findIndex(note => note.id === id)
            if (noteIndex < 0) {
                reject(`invalid node ID ${id}`)
                return
            }
            const newNotes = [...notes]
            newNotes.splice(noteIndex, 1)
            notesCollection.set(newNotes)
            resolve()
        })
    },
}

export const notes = {
    type: new graphql.GraphQLList(NoteType),
    resolve: () => notesCollection.get(),
}
