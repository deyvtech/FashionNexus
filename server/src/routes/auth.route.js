import express from 'express';
import { signup, signin, logout, getUser, updateUser } from '../controllers/auth.controller.js';
import { protect } from '../middleware/authMiddleware.js';
const authRoute = express.Router()

authRoute.post('/signup', signup)
authRoute.post('/signin', signin)
authRoute.post('/logout', logout)
authRoute.route('/profile').get(protect, getUser).put(protect, updateUser)

export default authRoute