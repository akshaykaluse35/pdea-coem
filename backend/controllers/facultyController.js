const Faculty = require('../models/Faculty');

// Add a new faculty member
const addFaculty = async (req, res) => {
  try {
    const {
      name, position, image, email, qualification, experience,
      expertArea, subjectsTaught, journalPublications,
      researchProjects, memberships, academicProfile
    } = req.body;

    const existingFaculty = await Faculty.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const faculty = new Faculty({
      name, position, image, email, qualification, experience,
      expertArea, subjectsTaught, journalPublications,
      researchProjects, memberships, academicProfile
    });
    await faculty.save();
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all faculty members
const getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a faculty member
const updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, position, image, email, qualification, experience,
      expertArea, subjectsTaught, journalPublications,
      researchProjects, memberships, academicProfile
    } = req.body;

    const existingFaculty = await Faculty.findOne({ email, _id: { $ne: id } });
    if (existingFaculty) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const faculty = await Faculty.findByIdAndUpdate(id, {
      name, position, image, email, qualification, experience,
      expertArea, subjectsTaught, journalPublications,
      researchProjects, memberships, academicProfile
    }, { new: true });

    if (!faculty) return res.status(404).json({ error: 'Faculty member not found' });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete a faculty member
const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const faculty = await Faculty.findByIdAndDelete(id);
    if (!faculty) return res.status(404).json({ error: 'Faculty member not found' });
    res.status(200).json({ message: 'Faculty member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  addFaculty,
  getAllFaculty,
  updateFaculty,
  deleteFaculty
};
