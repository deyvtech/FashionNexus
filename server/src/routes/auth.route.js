import express from 'express';
import { signup, signin, testing } from '../controllers/auth.controller.js';

const authRoute = express.Router()

authRoute.post('/signup', signup)
authRoute.get('/signin', signin)
authRoute.get('/testing', testing)


export default authRoute