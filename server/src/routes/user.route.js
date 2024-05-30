import express from 'express';
import { createUser } from '../controllers/user.controller.js';

const userRoute = express.Router()

userRoute.post('/sign-in', createUser)   

export default userRoute