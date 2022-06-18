const express = require('express')
const controller = require('../controllers/product.controller')

const productRoute = express.Router();

productRoute.post('/create',controller.productCreate);
productRoute.get('/get',controller.getAllProduct);
productRoute.patch('/update/:id',controller.productUpdate);
productRoute.delete('/delete/:id',controller.productDelete);

module.exports = productRoute;