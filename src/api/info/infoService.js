const Info = require('./info')

module.exports = {
    async index(req, res) {
        const info = await Info.find({}).sort({ createdAt: -1 })

        return res.json(info)
    },

    async show(req, res) {
        const info = await Info.findById(req.params.id)

        return res.json(info)
    },

    async store(req, res) {
        const info = await Info.create(req.body)

        return res.json(info)
    },

    async update(req, res) {
        const info = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(info)
    },

    async destroy(req, res) {
        await Info.findByIdAndRemove(req.params.id)

        return res.send()
    }
}