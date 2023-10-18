const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    profileImage: String,
    joinedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
