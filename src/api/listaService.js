const Lista = require('./lista')

module.exports = {
    async index(req,res) {
        const lista = await Lista.find({})

        return res.json(lista)
    },

    async show(req, res) {
        const lista = await Lista.findById(req.params.id)

        return res.json(lista)
    },

    async store(req,res) {
        const lista = await Lista.create(req.body)

        return res.json(lista)
    },

    async update(req,res) {
        const lista = await Lista.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(lista)
    },

    async destroy(req, res){
        await Lista.findByIdAndRemove(req.params.id)

        return res.send()
    }
}