const mongoose = require('mongoose');
const { Schema } = mongoose;

const method = new Schema({
  type: String,
  email: String,
  phone: String,
  cedula: String,
  bankName: String,
  bankNumber: Number,
  icon: String,
  img: String
})

const localSchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
  active: { type: Boolean, default: false },
  description: { type: String, required: true },
  phone: Number,
  pass: String,
  payment: [method]
},
  {
    versionKey: false
  })

const Local = mongoose.model('restaurant', localSchema)

module.exports = Local