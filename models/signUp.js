const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    allTasks: {
        type: Array,
    }
} , {timestamps: true});

const signUp = mongoose.model('signUp' , signUpSchema);

module.exports = signUp;