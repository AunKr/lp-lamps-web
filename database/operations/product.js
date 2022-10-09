const db = require('../sequalize')
const { ModelBase } = require("./modalBase");

class Products extends ModelBase {
  constructor() {
    super();
    this.fields = {
      id: "id",
      name: "name",
      category: 'category',
      subcategory: 'subcategory',
      description: "description",
      imageName: "imageName",
      driveId: "driveId",
      type: 'type',
      keyfeatures: 'keyfeatures',
      features: 'features'
    };

    // Set name of Model
    this._modelName = "Product";

    // Super call for setting up of fields
    super.initialize(this);

    this.convertFieldObjectToArray();
  }

  async getInvoiceById(data) {
    return await db[this._modelName].findOne({
      attributes: [
        "ID",
        "CustomerId",
        "FirstName",
        "LastName",
        "CompanyName",
        "Profession",
        "AFM",
        "DOY",
        "Street",
        "StreetNumber",
        "City",
        "Area",
        "PostalCode",
        "Floor",
        "Comments",
        "ContactPhone",
      ],
      where: { ID: id },
    });
  }

  async getInvoiceByIdAndCustomerId(customerId, invoiceId) {
    return await db[this._modelName].findOne({
      attributes: [
        "ID",
        "CustomerId",
        "FirstName",
        "LastName",
        "CompanyName",
        "Profession",
        "AFM",
        "DOY",
        "Street",
        "StreetNumber",
        "City",
        "Area",
        "PostalCode",
        "Floor",
        "Comments",
        "ContactPhone",
      ],
      where: { ID: invoiceId, CustomerId: customerId },
    });
  }

  async deleteCustomerInvoice(customerId, invoiceId) {
    return db[this._modelName].destroy({
      where: { CustomerId: customerId, ID: invoiceId },
    });
  }
}

module.exports = new Products();
