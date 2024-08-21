const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  department: { type: String, required: true },
  image: { type: String, required: true },
  year: { type: String, required: true },
});

module.exports = mongoose.model("Gallery", gallerySchema);
