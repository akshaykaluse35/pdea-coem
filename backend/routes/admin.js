// routes/admin.js
const express = require('express');
const { auth, admin } = require('../middleware/authMiddleware');
const router = express.Router();

// Protect all routes under /admin
router.use(auth);
router.use(admin);

router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin Dashboard' });
});

// Add other admin routes here

module.exports = router;
