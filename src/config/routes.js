const express = require('express')
const auth = require('./auth')	// middleware de autenticação

const routes = express.Router()

const ListaService = require('../api/listaService')
const ItemService = require('../api/itemService')
const AuthService = require('../api/user/authService')
const InfoService = require('../api/info/infoService')

// routes.use(auth)

// API PROTEGIDA POR TOKEN

// routes.get('/api/listas', auth, ListaService.index)
// routes.get('/api/listas/:id', auth, ListaService.show)
// routes.post('/api/listas', auth, ListaService.store)
// routes.put('/api/listas/:id', auth, ListaService.update)
// routes.delete('/api/listas/:id', auth, ListaService.destroy)

// routes.post('/api/listas/:id', auth, ItemService.store)
// routes.put('/api/items/:id', auth, ItemService.update)
// routes.delete('/api/listas/:id/:item_id', auth, ItemService.destroy)

routes.get('/api/info', auth, InfoService.index) //READ ALL
routes.get('/api/info/:id', auth, InfoService.show) // READ ONE
routes.post('/api/info', auth, InfoService.store) // CREATE
routes.put('/api/info/:id', auth, InfoService.update) //UPDATE 
routes.delete('/api/info/:id', auth, InfoService.destroy) //DELETE

// API PUBLICA

routes.post('/oapi/login', AuthService.login)
routes.post('/oapi/signup', AuthService.signup)
routes.post('/oapi/validateToken', AuthService.validateToken)

module.exports = routes