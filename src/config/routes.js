const express = require('express')

const routes = express.Router()

const ListaService = require('../api/listaService')
const ItemService = require('../api/itemService')

routes.get('/listas', ListaService.index)
routes.get('/listas/:id', ListaService.show)
routes.post('/listas', ListaService.store)
routes.put('/listas/:id', ListaService.update)
routes.delete('/listas/:id', ListaService.destroy)

routes.post('/listas/:id', ItemService.store)
routes.put('/items/:id', ItemService.update)
routes.delete('/listas/:id/:item_id', ItemService.destroy)

module.exports = routes