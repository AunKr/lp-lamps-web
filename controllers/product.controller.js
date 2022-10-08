const multer = require("multer");
const NodeGoogleDrive = require("node-google-drive");
const path = require("path");

const Product = require("../database/operations/product.js");
const service = require("../shared/service.response.js");
const YOUR_ROOT_FOLDER = "1BfBJzlCYSi7tDkeWI9R2KEjkPAGuphme";
const PATH_TO_CREDENTIALS = path.resolve(`${__dirname}/my_credentials.json`);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

exports.upload = multer({
  storage: storage,
  limits: { fileSize: "10000" },
}).single("image");

exports.productCreate = async (req, res) => {
console.log('productCreate :');
  try {
    const filePath = req.file?.path.replace(/\\/g, " ");
    console.log('filePath :', filePath);
    const filepathArray = filePath.split(" ");
    console.log('filepathArray :', filepathArray);
    const imagePath = `${filepathArray[filepathArray.length - 1]}`;
    console.log('imagePath :',  path.join(__dirname, `../images/${imagePath}`));
    const creds_service_user = require(PATH_TO_CREDENTIALS);
    const googleDriveInstance = new NodeGoogleDrive({
      ROOT_FOLDER: YOUR_ROOT_FOLDER,
    });
    await googleDriveInstance.useServiceAccountAuth(creds_service_user);
    
    let uploadedFile = await googleDriveInstance.writeFile(
      path.join(__dirname, `../images/${imagePath}`),
      YOUR_ROOT_FOLDER
      );
      
      console.log('uploadedFile :', uploadedFile);
    const data = {
      name: req.body.name,
      category: req.body.category,
      subcategory: req.body.subcategory,
      description: req.body.description,
      driveId: uploadedFile.id,
      imageName: uploadedFile.name,
      type: uploadedFile.mimeType,
    };
    console.log('data :', data);
    const response = await Product.create(data);
    if (response) {
      const data = {
        message: "Product added successfully",
        type: "success",
        productData: response,
      };
      return service.responseSuccess(res, data);
    } else {
      return service.responseError(
        res,
        service.createError(
          service.ERROR.ERROR_DATABASE_EXEC,
          "Product not added"
        )
      );
    }
  } catch (error) {
    console.log("error======>>>>>", error);
    return service.responseError(
      res,
      service.createError(
        service.ERROR.ERROR_BAD_REQUEST,
        "Something went wrong"
      )
    );
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const response = await Product.getAll();
    if (response) {
      res.send(response).status(200);
    } else {
      res.send({ error: "Something went wrong" }).status(400);
    }
  } catch (error) {
    res.send({ error: error }).status(500);
  }
};

exports.productUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Product.update(req.body, { id: id });
    if (response) {
      res.send(response).status(200);
    } else {
      res.send({ error: "Something went wrong" }).status(400);
    }
  } catch (error) {
    res.send({ error: error }).status(500);
  }
};

exports.productDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Product.deleteEntry(id);
    if (response) {
      res.send({ data: response }).status(200);
    } else {
      res.send({ error: "Something went wrong" }).status(400);
    }
  } catch (error) {
    res.send({ error: error }).status(500);
  }
};
