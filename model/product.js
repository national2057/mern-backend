const mongoose = require('mongoose');
const {Schema} = mongoose;

// Schema
const productSchema = new Schema({
   title: {type: String, require: true, unique: true},
   description: String,
   price: {type: Number, require: true, min: [100, "too low min price"]},
   discountPercentage: {type: Number, min: 5, max:[20, "too high discount percentage"]},
   rating: {type: Number, require: true, min: [0, "too low min rating"], max:[5, "too high max rating"], default:0},
   stock: Number,
   brand: {type: String, require: true},
   category: {type: String, require: true},
   thumbnail: {type: String, require: true},
   images: [ String ]   
 });

exports.Product = mongoose.model('Product', productSchema);

