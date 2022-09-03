const express = require('express')
const controller = require('../controllers/auth.controller')

const userRoute = express.Router();

userRoute.post('/register',controller.register);
userRoute.post('/login',controller.login);

module.exports = userRoute;