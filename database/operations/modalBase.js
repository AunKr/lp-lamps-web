const db = require('../sequalize.js');
const Op = require('sequelize').Op;

class ModelBase {
  constructor() {
    this.db = db
    this.model = db[this._modelName]
    this._modelName = null
    this.fields = {}
    this._fieldArrays = []
    this._context = null
    this._query = null
    /*
     * _identityName : this field defines the logger parameter to appear when operation is performed on this model
     * */
    this._identityName = null
    this._sequence = null
  }

  initialize(self, relations) {
    this._modelName = self._modelName
    this.fields = self.fields
    this.model = db[self._modelName]
    this._identityName = self._identityName || 'id'
  }

  convertFieldObjectToArray() {
    this._fieldArrays = Object.keys(this.fields).filter(field => field.charAt(0) !== '_')
  }

  getRelations() {
    let rel = clone(this._relations);
    return rel;
  }

  checkValidFields(fields = []) {
    return this.getValidFields(fields).length === 0
  }

  getValidFields(fields = []) {
    return (fields.filter(field => this._fieldArrays.indexOf(field) > -1))
  }

  /**
   * create new table
   * @param {*} fields
   * @param transaction
   */
  async create(fields, transaction = null) {
    return await db[this._modelName].create(fields, {transaction});
  }

  /**
   * create or update table
   * @param {*} fields
   * @param transaction
   */
  async upsert(fields, transaction = null) {
    // SET IDENTITY_INSERT tbl_content ON; set this property before insertion
    return await db[this._modelName].upsert(fields, {returning: true, transaction});
  }

  async getMaxId() {
    const result = await db[this._modelName].findOne({
      attributes: [
        [db.sequelize.fn('MAX', db.sequelize.col('ID')), 'ID']
      ],
      group: ['ID'],
      order: [
        ['ID', 'DESC']
      ],
      raw: true
    });
    return result && result.ID;
  }

  async update(fields, where) {
    return db[this._modelName]
      .update(fields, {where: where})
  }

  async updateWithTransaction(fields, transaction = null, where = null) {
    return db[this._modelName]
      .update(fields, {where: where, returning: true, transaction})
  }

  async delete(customerId, addressId) {
    return db[this._modelName]
      .destroy({where: {CustomerId: customerId, ID: addressId, Default: false}})
  }

  async deleteEntry(id) {
    return db[this._modelName]
      .destroy({where: {id: id}})
  }

  async deleteWithTransaction(where, transaction = null) {
    return db[this._modelName]
      .destroy({where: where, transaction})
  }

  /**
   * Returns one user matching the condition.
   *
   * Checks if user already exists matching specific emailId.
   *
   * @since      1.0.0
   * @access     public
   *
   *
   * @alias    getSpecificUser
   * @memberof Base
   *
   *
   * @param {Object} fields  conditions values
   * @param  {Array} attributes to fetch
   * @param  {Array} relations for include
   * @return {Promise} Users Sequelize Instance containing One User
   */
  async getFirst(fields, attributes = this._fieldArrays, relations = this._relations) {
    return db[this._modelName].findOne({
      attributes: attributes,
      where: fields,
      include: relations,
    })
  }


  /**
   * Check if data with given fields already exists in database. If it does then throw error.
   * Used for custom exist validations
   *
   * @param {*} fields
   * @param withRel
   * @returns
   * @memberof Base
   */
  isAlreadyExists(fields, withRel = true) {
    return this.getFirst(fields, ['ID'], !withRel ? null : this._relations)
      .then(result => {
        if (result) throw new Error()
      })
  }

  /**
   * Returns Error if Model not found with given data
   *
   * @param {*} fields
   * @param withRel
   * @returns
   * @memberof Base
   */
  isNotExists(fields, withRel = true) {
    return this.getFirst(fields, ['ID'], !withRel ? null : this._relations)
      .then(result => {
        if (!result) throw new Error()
      })
  }

  /**
   * Returns all data of the model from database.
   *
   * @since      1.0.0
   * @access     public
   *
   * @alias    getAll
   * @memberof BaseClass
   *
   * @param offset sets the offset of SQL
   * @param limit sets the limit of SQL
   * @param distinct
   * @param relations
   * @param attributes
   * @param overrides object containing sequelize condition
   * @return {Promise} Sequelize Instance containing array and count
   */

  async getAll(limit, offset, overrides = {}, attributes = this._fieldArrays, distinct = false, relations = this._relations) {
    let fields = attributes
    let order = []
    let where = {}
    if (this._query) {
      if (this._query.attributes) {
        fields = this._query.attributes
      }

      if (this._query.limit) {
        limit = this._query.limit
      }

      if (this._query.offset !== null) {
        offset = this._query.offset
      }

      if (this._query.order) {
        order = this._query.order
      }

      if (this._query.where) {
        where = this._query.where
      }
    }
    if (overrides.where) {
      where = Object.assign(where, overrides.where)
    }
    if (overrides.order) {
      order = overrides.order
    }
    return db[this._modelName].findAndCountAll({
      attributes: fields,
      distinct: distinct,
      limit,
      offset,
      order,
      where,
      include: relations
    })
  }
}

module.exports.ModelBase = ModelBase
