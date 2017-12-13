import * as graphql from 'graphql'
import uuidV4 from 'uuid/v4'

import {notesCollection, usersCollection} from './db'
import {NoteType} from './Note'

export const UserType = new graphql.GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
        },
        email: {
            type: graphql.GraphQLString,
        },
        notes: {
            type: new graphql.GraphQLList(NoteType),
            resolve: (user) => {
                return notesCollection.get().filter(note => note.user === user.id)
            },
        }
    })
})

export const addUser = {
    type: UserType,
    description: 'add a user',
    args: {
        email: {
            name: 'the users email',
            type: new graphql.GraphQLNonNull(graphql.GraphQLString),
        }
    },
    resolve: (root, {email}) => {
        return new Promise((resovle, reject) => {
            const users = usersCollection.get()
            if (users.some(user => user.email === email)) {
                reject(`email already in use ${email}`)
            }
            const user = {
                id: uuidV4(),
                email,
            }
            usersCollection.set([...users, user])
            resovle(user)
        })
    },
}

export const users = {
    type: new graphql.GraphQLList(UserType),
    resolve: () => usersCollection.get(),
}
