const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    
});
module.exports = mongoose.model('Doctor', doctorSchema);