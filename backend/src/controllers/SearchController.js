const Developer = require('../models/Developer')
const parseStringToArray = require('../utils/parseStringToArray')

module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringToArray(techs)

        const developer = await Developer.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude,latitude]
                    },
                    $maxDistance: 10000
                },
            },
        })

        return res.json({ developer })
    },
}