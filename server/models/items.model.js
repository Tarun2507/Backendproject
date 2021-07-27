const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  name: { type: String, required: true },
  imagename: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
}, {
  timestamps: true,
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;