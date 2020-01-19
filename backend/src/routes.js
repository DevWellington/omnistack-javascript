const { Router } = require('express')
const DeveloperController = require('./controllers/DeveloperController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params; req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso no PUT or DELETE)
// Body: req,body (Dados para criação ou alteração de um registro)

routes.get('/developers', DeveloperController.index)
routes.post('/developers', DeveloperController.store)

routes.get('/search', SearchController.index)

module.exports = routes