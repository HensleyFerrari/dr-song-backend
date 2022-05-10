const mongoose = require('mongoose')
const Item = require('./item')

const listSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    descricao: {type: String},
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Lista', listSchema)