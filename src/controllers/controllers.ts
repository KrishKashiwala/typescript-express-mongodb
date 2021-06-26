import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
const bcrypt = require('bcrypt');
const app = express();
mongoose.set('useFindAndModify', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const User = mongoose.model('user');

exports.baseRoute = async (req: Request, res: Response) => {
    const users = await User.find({}).lean();
    res.json(users);
};

exports.createUser = async (req: Request, res: Response) => {
    User.find({ name: req.body.name }, async (err, data) => {
        if (err) res.json({ msg: err });
        if (data) {
            console.log('not created');
            res.json({ redirect: '/' });
        }
        if (data) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                name: req.body.name,
                password: hashedPassword
            });
            console.log(newUser);
            await newUser.save();
            console.log('user created');
            res.json({ redirect: '/' });
        }
    });
};
