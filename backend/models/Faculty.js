const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String,
  email: { type: String, unique: true },
  qualification: String,
  experience: String,
  expertArea: String,
  subjectsTaught: String,
  journalPublications: String,
  researchProjects: String,
  memberships: String,
  academicProfile: String,
  tags: [String],
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
