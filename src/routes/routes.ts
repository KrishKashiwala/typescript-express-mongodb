import express, { Request, Response, NextFunction } from 'express';
import { requestMiddleware } from '../requestMiddleware';
const router = express.Router();
// GET Requests
router.get(
    '/',
    requestMiddleware,
    (req: Request, res: Response, next: NextFunction) => {
        res.send('packet recieved');
    }
);
export { router };
