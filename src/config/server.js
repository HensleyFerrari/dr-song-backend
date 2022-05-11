const port = 3003

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()
const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DATABASE_URL , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connectd to DB')
    }).catch(e => console.log(e))

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api', require('./routes'))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = server