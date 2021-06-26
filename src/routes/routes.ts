import express, { Request, Response, NextFunction } from 'express';
import { requestMiddleware } from '../requestMiddleware';
const controller = require('../controllers/controllers');
const router = express.Router();
// ------------------- GET Requests ----------------
router.get('/', controller.baseRoute);

// ------------------ POST REQUEST -----------------
router.post('/login', controller.createUser);
export { router };
