import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';

const authRoute = express.Router()

authRoute.post('/signup', signup)
authRoute.get('/signin', signin)


export default authRoute