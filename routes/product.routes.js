const express = require('express')
const controller = require('../controllers/product.controller')
const { ensureAuthenticated } = require('../middleware/auth.middleware.js')

const productRoute = express.Router();

productRoute.post('/create' ,controller.upload, controller.productCreate);
productRoute.get('/get' , controller.getAllProduct);
productRoute.patch('/update/:id' , controller.productUpdate);
productRoute.delete('/delete/:id' , controller.productDelete);

module.exports = productRoute;