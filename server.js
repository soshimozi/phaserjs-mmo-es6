import express from 'express'
import http from 'http'
import SocketIO from 'socket.io'
import compression from 'compression'
import path from 'path'

let app = express()
let server = http.Server(app)
let io = new SocketIO(server)
let port = process.env.PORT || 3000
let users = []
let sockets = {}

app.use(compression({}))

app.use(express['static'](path.join(__dirname, 'dist')))

server.listen(port, () => {
  console.log('[INFO] Listening on *:' + port)
})
