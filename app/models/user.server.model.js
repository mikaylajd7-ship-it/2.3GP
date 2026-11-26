// Name: Mikayla Dickerson
// Date: November 26, 2026
// Mongoose schema for user documents in the mean-book database.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoose.model('User', UserSchema);
