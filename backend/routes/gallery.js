const express = require("express");
const {
  getAllGallery,
  addGallery,
} = require("../controllers/galleryController");
const router = express.Router();

router.post("/", addGallery);

router.get("/", getAllGallery);

module.exports = router;
