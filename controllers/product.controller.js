const multer = require('multer')
const path = require('path')

const Product = require('../database/operations/product.js')
const service = require('../shared/service.response.js')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("__dirname", __dirname);
        cb(null, path.join(__dirname,"../images"))
    },
    filename: (req, file, cb)=> {
        cb(null,file.originalname)
    }
})

exports.upload = multer({
    storage:storage,
    limits:{fileSize: '10000'}
}).single('image')


exports.productCreate = async (req, res) => {
    try {
        const filePath = req.file?.path.replace(/\\/g, ' ')
        console.log("filePath==>", filePath);
        const filepathArray = filePath.split(' ')
        console.log("filepathArray==??????????????>", filepathArray);
        const path = `${filepathArray[filepathArray.length-2]}\\${filepathArray[filepathArray.length-1]}`
        let data = {
            name: req.body.name,
            category: req.body.category,
            subcategory: req.body.subcategory,
            description: req.body.description,
            image: path
        }
        const response =await Product.create(data)
        if(response){
            const data = {
                message: 'Product added successfully',
				type: 'success',
				productData: response,
            }
            return service.responseSuccess(res, data);
        }else {
            return service.responseError(res, service.createError(service.ERROR.ERROR_DATABASE_EXEC, "Product not added"));
        }
    } catch (error) {
        console.log("error======>>>>>",error);
        return service.responseError(res, service.createError(service.ERROR.ERROR_BAD_REQUEST, "Something went wrong"));
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

