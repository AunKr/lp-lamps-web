const { Sequelize, Op, DataTypes } = require("sequelize");
const path = require("path");
const fs = require("fs");

const dbConfig = require("./dbConfig");

const modelPath = path.normalize(path.join(__dirname, "/.."));
const db = {};
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("error in test connection-- ", err);
    throw err;
  });

// loop through all files in models directory
fs.readdirSync(path.join(modelPath, "models")).forEach(function (file) {
  const model = require(path.join(modelPath, "models", file))(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].options.hasOwnProperty("associate")) {
    db[modelName].options.associate(db);
  }
});

// Synchronizing any model changes with database.
sequelize
  .sync({
    force: false,
  })
  .then(function () {})
  .catch((err) => {
    console.error("error -- ", err);
    throw err;
  });
// assign the sequelize variables to the db object and returning the db.
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Op;
module.exports = db;
