const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tag: { type: String },
    url: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    image: { tyoe: String }
})

module.exports = mongoose.model('Info', infoSchema)