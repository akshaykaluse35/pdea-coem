// routes/notification.js
const express = require('express');
const { createNotification, getNotifications } = require('../controllers/notificationController');
const { auth, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, admin, createNotification);
router.get('/', getNotifications);


module.exports = router;
