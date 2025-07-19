import express from 'express';
const router = express.Router();
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, deleteUser);

export default router;