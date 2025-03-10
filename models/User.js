const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type:String,
        required: true
    },
}, {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
module.exports = User;