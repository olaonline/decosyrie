const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);     // Register a new user
router.post('/login', authUser);            // Authenticate user and get token

// Protected routes
router.route('/profile')
  .get(protect, getUserProfile)             // Get logged in user profile
  .put(protect, updateUserProfile);         // Update logged in user profile

// Admin routes
router.route('/')
  .get(protect, admin, getUsers);           // Get all users (Admin only)
router.route('/:id')
  .delete(protect, admin, deleteUser);      // Delete a user (Admin only)

module.exports = router;