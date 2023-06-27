const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const perfumeSchema = new Schema({
  perfume_name: { type: String, required: true },
  perfume_category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  perfume_picture: { type: String },
  isDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("perfume", perfumeSchema);
