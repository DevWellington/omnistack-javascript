const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')

const app = express()
const server = http.Server(app)

const { setupWebsocket } = require('./websocket')

setupWebsocket(server)

// mongoose.connect('mongodb+srv://semana:semana@cluster0-2nams.gcp.mongodb.net/week10?retryWrites=true&w=majority',
mongoose.connect('mongodb://semana:semana@localhost/week10?ssl=false&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
