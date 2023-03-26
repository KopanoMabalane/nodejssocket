const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app)
const io = require('socket.io')(server,{cors:{origin:"*"}})
app.set('view engine','ejs')
app.get('/home',(req,res) => {
    res.render('home')
})
io.on('connection',(sockect) => {
    console.log("User Conncted " + sockect.id)
    sockect.on('message',(data) => {
     sockect.broadcast.emit('message',data)
    })
})
server.listen(3001, () => {
    console.log("Listening on port 3000")
})

