// routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const { addFaculty, getAllFaculty, updateFaculty, deleteFaculty } = require('../controllers/facultyController');

// Add Faculty
router.post('/', addFaculty);

// Get all Faculty
router.get('/', getAllFaculty);

// Update Faculty
router.put('/:id', updateFaculty);

// Delete Faculty
router.delete('/:id', deleteFaculty);

module.exports = router;
