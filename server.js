const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const http = require('http')
const fs = require('fs')

const productRoutes = require('./routes/product.routes')

const app = express();
const server = http.createServer(app);

// set up constants
let port = process.env.PORT || 4500

app.set("port", port);
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// load all routes
app.use('/product', productRoutes)

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
process.on("unhandledRejection", (error) => {
  console.log("UNHANDLED_REJECTION", error);
});

// Start the Server
server.listen(port, function () {
  console.log("Server listening on port " + port + "...");
});
