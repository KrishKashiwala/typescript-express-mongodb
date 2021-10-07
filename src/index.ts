import express from 'express';
import cors from 'cors';
const app = express();
import session from 'express-session';
import { DB_STRING } from './config/database';
const MongoStore = require('connect-mongo');
import { router } from './routes/routes';
require('dotenv').config();

// --------------------GENERAL SETUP --------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ------------------- SESSION SETUP -------------

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
app.use(
    session({
        secret: 'something',
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: DB_STRING,
            collection: 'user',
            ...dbOptions
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);
app.use((req, res, next) => {
    console.log(req.session);
    console.log(req.sessionID);
    next();
});
// ------------------ ROUTES ----------------------
app.use('/', router);
app.use('/home',router)
app.use('/home/profile/:id',router)

//   ---------------- SERVER ----------------------
app.listen(5000, () => console.log('server listening on port -> 5000'));
export { app };
