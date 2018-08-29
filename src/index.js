import express from 'express'
// import bodyParser from 'body-parser'
import http from 'http'

const app = express()

const server = http.createServer(app)

server.listen(process.env.PORT || 3001)
console.log('Listen to app at port...', 3001)
