const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    email: String,
    dateOfBirth: Number,
    password: String,
    confirmPassword: String
});
const User = mongoose.model("User", UserSchema)


module.exports = {
    User: User
}