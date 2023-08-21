/* pakages */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

/* using schemas */
const schema = require("../schemas/mascotas.schemas");
db();

schema.statics = {
  create: function (data, cb) {
    let doc = new this(data);
    return doc.save(cb);
  },
  getAll: function (query, cb) {
    return this.find(query, cb);
  },
  getByCode: function (query, cb) {
    return this.find(query, cb);
    
  },
  update: function (query, data, cb) {
    return this.findOneAndUpdate(query, { $set: data }, { new: true }, cb);
    
  },
  delete: function (query, cb) {
    return this.findOneAndDelete(query);
    
  },
};

const dto = mongoose.model("coll_mascotas", schema);
module.exports = dto;
