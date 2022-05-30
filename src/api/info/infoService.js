const Info = require('./info')

module.exports = {
    async index(req, res) {
        const info = await Info.find({}).sort({ createdAt: -1 })

        return res.json(info)
    },

    async indexPopular(req,res) {
        const info = await Info.find({picked: {$gt : 0}}).sort({picked: -1}).limit(10)

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

    async updatePopular(req, res) {
        const one = await Info.findById(req.params.id)

        const { picked } = one

        const result = picked + 1

        if (one) {
            const info = await Info.findByIdAndUpdate(req.params.id, { picked: result }, { new: true })

            return res.json(info)
        }
    },

    async destroy(req, res) {
        await Info.findByIdAndRemove(req.params.id)

        return res.send()
    }
}