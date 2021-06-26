import mongoose from 'mongoose';
require('../model/schema');
require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
 * string into the `.env` file
 *
 * DB_STRING=mongodb://<user>:<password>@localhost:27017/database_name
 */

const DB_STRING =
    'mongodb+srv://krishkashiwala:krish5501@krishcluster.nclxl.mongodb.net/typescript_db?retryWrites=true&w=majority';
const connection = mongoose.connect(DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('error', (err) => console.warn(err.message));

export { connection, DB_STRING };
