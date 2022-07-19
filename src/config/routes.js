const express = require('express')
const auth = require('./auth')	// middleware de autenticação

const routes = express.Router()

const AuthService = require('../api/user/authService')
const InfoService = require('../api/info/infoService')

// routes.use(auth)

// API PROTEGIDA POR TOKEN

routes.get('/api/info', InfoService.index) //READ ALL
routes.get('/api/info/popular', auth, InfoService.indexPopular) //READ ALL
routes.get('/api/info/:id', auth, InfoService.show) // READ ONE
routes.post('/api/info', auth, InfoService.store) // CREATE
routes.put('/api/info/:id', auth, InfoService.update) //UPDATE 
routes.put('/api/info/:id/popular', auth, InfoService.updatePopular) //UPDATE POPULAR
routes.delete('/api/info/:id', auth, InfoService.destroy) //DELETE

// API PUBLICA

routes.post('/oapi/login', AuthService.login)
routes.post('/oapi/signup', AuthService.signup)
routes.post('/oapi/validateToken', AuthService.validateToken)

module.exports = routes