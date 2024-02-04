const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema ({
    name: String,
    email: String,
    password: String,
});

const UsersModel = mongoose.model("users", usersSchema);
exports.UsersModel = UsersModel;