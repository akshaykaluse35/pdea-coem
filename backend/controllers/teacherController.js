// controllers/teacherController.js
const Teacher = require('../models/Teacher');

exports.getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTeacher = async (req, res) => {
    try {
        const newTeacher = new Teacher(req.body);
        const savedTeacher = await newTeacher.save();
        res.json(savedTeacher);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add other CRUD operations similarly...
