const Lista = require('./lista')
const Item = require('./item')

module.exports = {
    async store(req,res) {
        const lista = await Lista.findById(req.params.id)
        const item = await Item.create(req.body, (err, item) =>{
            item.save()
            lista.items.push(item)
            lista.save()
        })

        return res.json(item)
    },

    async update(req,res) {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(item)
    },

    async destroy(req, res){
        const lista = await Lista.findById(req.params.id)
        await Item.findByIdAndRemove(req.params.item_id, (err, item) =>{
            lista.items.remove(item)
            lista.save()
        })

        return res.send()
    }
}