import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    }
});
module.exports = mongoose.model('user', userSchema);
