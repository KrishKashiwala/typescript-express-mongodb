import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
// GET Requests
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('packet recieved');
});
export { router };
