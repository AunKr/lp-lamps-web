const db = require('../sequalize')
const { ModelBase } = require("./modalBase");

class User extends ModelBase {
  constructor() {
    super();
    this.fields = {
      id: "id",
      email: "email",
      password: "password",
      phone: "phone",
      name: 'name'
    };

    // Set name of Model
    this._modelName = "User";

    // Super call for setting up of fields
    super.initialize(this);

    this.convertFieldObjectToArray();
  }
}

module.exports = new User();
