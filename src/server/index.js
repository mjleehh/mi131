import express from 'express'
import httpGraphQl from 'express-graphql'
import schema from './Schema'

const app = express()

app.use('/', httpGraphQl({schema, pretty: true}))

app.listen(3000)
console.log('listening on :3000')
