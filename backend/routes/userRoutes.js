// routes/userRoutes.js
const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:userId', auth, getProfile);
router.put('/:userId/profile', auth, updateProfile);

module.exports = router;
