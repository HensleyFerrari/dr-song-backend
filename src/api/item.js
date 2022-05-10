const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String },
    createdAt: { type: Date, default: Date.now },
    image: { tyoe: String }
})

module.exports = mongoose.model('Item', itemSchema)