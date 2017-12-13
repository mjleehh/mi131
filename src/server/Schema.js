import * as graphql from 'graphql'
import {notes, addNote, changeNote, deleteNote} from './Note'
import {users, addUser} from './User'

const QueryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        notes,
        users,
    })
})

const MutationType = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addNote,
        changeNote,
        deleteNote,
        addUser,
    })
})

export default new graphql.GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
})
