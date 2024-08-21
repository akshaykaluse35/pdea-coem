// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Get user profile
exports.getProfile = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Failed to fetch profile. Please try again.' });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  try {
    const updates = {};
    if (username) updates.username = username;
    if (email) updates.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      updates.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Failed to update profile. Please try again.' });
  }
};
