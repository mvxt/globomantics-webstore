const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId

var productSchema = new Schema({
  id: ObjectId,
  name: String,
  price: Number,
  upc: String,
  image: String,
  description: String
})

const Product = model('Product', productSchema)
module.exports = {Product}
