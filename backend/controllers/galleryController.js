const Gallery = require("../models/Gallery");

const addGallery = async (req, res) => {
  try {
    const { image, department, year } = req.body;
    console.log(image, department, year);
    const faculty = new Gallery({ image, department, year });
    await faculty.save();
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllGallery = async (req, res) => {
  try {
    const { year, department } = req.query;
    console.log(year, department, "opopop")
    let query = {};
    if (year) query.year = year;
    if (department) query.department = department;

    const allGal = await Gallery.find();

    const gallery = await Gallery.find(query);

    console.log(allGal, "gal", gallery , year, department);
    res.status(200).json(gallery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addGallery,
  getAllGallery,
};
