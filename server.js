const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const fs = require("fs");

const productRoutes = require("./routes/product.routes");
const userRoute = require("./routes/auth.routes");

const app = express();
const server = http.createServer(app);
const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server

  // set up constants
  let port = process.env.PORT || 4500;

  app.set("port", port);
  app.use(bodyParser.json({ limit: "900mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(express.static(path.join(__dirname, "public")));
  app.use(cors());

  // load all routes
  app.use('/images', express.static(path.join(__dirname + '/images')))
  app.use("/auth", userRoute);
  app.use("/product", productRoutes);

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

  process.on("unhandledRejection", (error) => {
    console.log("UNHANDLED_REJECTION", error);
  });

  app.use(express.static('client/build'));
  app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

  // Start the Server
  server.listen(port, function () {
    console.log("Server listening on port " + port + "...");
  });
}
