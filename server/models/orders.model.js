const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  noofitems : { type: Number, required: true },
  customername: { type: String, required: true },
  bill: { type: Number, required: true },
  status : {type:String, required : true}
   
}, {
  timestamps: true,
});

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;