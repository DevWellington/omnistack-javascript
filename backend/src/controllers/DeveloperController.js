const axios = require('axios')
const Developers = require('../models/Developer')
const parseStringToArray = require('../utils/parseStringToArray')
const { findConnections, sendMessage } = require('../websocket')

// index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const developer = await Developers.find()

    return res.json(developer)
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body
    const techsArray = parseStringToArray(techs)

    let developer = await Developers.findOne({ github_username })
    if (developer) return res.json(developer)

    const resApi = await axios.get(`https://api.github.com/users/${github_username}`)
    const { name = login, avatar_url, bio } = resApi.data

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }

    developer = await Developers.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    })

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray
    )

    sendMessage(sendSocketMessageTo, 'new-dev', developer)

    return res.json(developer)
  },
  async update(req, res) {

  },
  async destroy(req, res) {

  }
}
