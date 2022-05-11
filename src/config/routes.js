const express = require('express')
const auth = require('./auth')	// middleware de autenticação

const routes = express.Router()

const ListaService = require('../api/listaService')
const ItemService = require('../api/itemService')
const AuthService = require('../api/user/authService')
const InfoService = require('../api/info/infoService')

routes.use(auth)

// API PROTEGIDA PRO TOKEN

routes.get('/api/listas', ListaService.index)
routes.get('/api/listas/:id', ListaService.show)
routes.post('/api/listas', ListaService.store)
routes.put('/api/listas/:id', ListaService.update)
routes.delete('/api/listas/:id', ListaService.destroy)

routes.post('/api/listas/:id', ItemService.store)
routes.put('/api/items/:id', ItemService.update)
routes.delete('/api/listas/:id/:item_id', ItemService.destroy)

routes.get('/api/info', InfoService.index)
routes.get('/api/info/:id', InfoService.show)
routes.post('/api/info', InfoService.store)
routes.put('/api/info/:id', InfoService.update)
routes.delete('/api/info/:id', InfoService.destroy)

// API PUBLICA

routes.post('/oapi/login', AuthService.login)
routes.post('/oapi/signup', AuthService.signup)
routes.post('/oapi/validateToken', AuthService.validateToken)

module.exports = routes