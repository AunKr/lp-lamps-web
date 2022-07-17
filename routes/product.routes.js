const express = require('express')
const controller = require('../controllers/product.controller')
const { ensureAuthenticated } = require('../middleware/auth.middleware.js')

const productRoute = express.Router();

productRoute.post('/create', ensureAuthenticated,controller.upload, controller.productCreate);
productRoute.get('/get', ensureAuthenticated, controller.getAllProduct);
productRoute.patch('/update/:id', ensureAuthenticated , controller.productUpdate);
productRoute.delete('/delete/:id', ensureAuthenticated , controller.productDelete);

module.exports = productRoute;