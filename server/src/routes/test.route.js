import express from 'express';
import { testController } from '../controllers/test.controller.js';

const testRoute = express.Router();

testRoute.get('/test', testController)


export default testRoute