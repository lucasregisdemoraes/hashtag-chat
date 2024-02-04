const http = require('http')
const express = require('express')
const app = express()
const httpServer = http.createServer(app)
const io = require('socket.io')(httpServer)


app.use(express.static('./public'))

io.addListener('connection', (socket) => {
    console.log("Usuário conectou!")
    socket.addListener("nova mensagem", (msg) => {
        io.emit("nova mensagem", msg)
    })
})

httpServer.listen(3000)