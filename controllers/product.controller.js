const Product = require('../database/operations/product.js')

exports.productCreate = async (req, res) => {
    try {
        const response =await Product.create(req.body)
        if(response){
            res.send(response).status(200)
        }else {
            res.send({error: 'Something went wrong'}).status(400)
        }
    } catch (error) {
        res.send({error: error}).status(500)
    }
};

exports.getAllProduct = async (req,res) => {
    try {
        const response = await Product.getAll()
        if(response){
            res.send(response).status(200)
        }else {
            res.send({error: 'Something went wrong'}).status(400)
        }
    } catch (error) {
        res.send({error: error}).status(500)
    }
}

exports.productUpdate = async (req,res) => {
    try {
        const id = req.params.id
        const response = await Product.update(req.body, {id: id})
        if(response){
            res.send(response).status(200)
        }else {
            res.send({error: 'Something went wrong'}).status(400)
        }
    } catch (error) {
        res.send({error: error}).status(500)
    }
}

exports.productDelete = async (req,res) => {
    try {
        const id = req.params.id
        const response = await Product.deleteEntry(id)
        if(response){
            res.send({data: response}).status(200)
        }else {
            res.send({error: 'Something went wrong'}).status(400)
        }
    } catch (error) {
        res.send({error: error}).status(500)
    }
}

