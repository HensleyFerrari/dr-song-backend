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

server.use(require('./routes'))

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})

module.exports = server