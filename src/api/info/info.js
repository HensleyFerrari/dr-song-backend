const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    nome: { type: String }, // Nome do anime ou musica
    author: {type: String}, // Nome do autor
    anime: {type: String, required: true}, // Anime ou musica
    tag: { type: String }, // "Opening", 'Ending', 'OST', 'Song'
    url: { type: String, required: true },
    spotify: { type: Boolean, default: false }, // true: Spotify, false: Youtube
    image: { type: String }, // Link da imagem 
    createdAt: { type: Date, default: Date.now }, // Data de criação    
    createdBy: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // ID do usuário que criou
        name: {type: String, required: true} // Nome do usuário que criou
    },
    updatedBy: {type: String}, // Nome do usuário que atualizou
    updatedAt: {type: Date, timestamp: true} // Data da última atualização
})

module.exports = mongoose.model('Info', infoSchema)