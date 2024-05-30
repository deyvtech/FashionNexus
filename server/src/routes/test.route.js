import { testController } from '../controllers/test.controller.js';
import express from 'express'

const testRoute = express.Router();

testRoute.post('/test', testController)


export default testRoute