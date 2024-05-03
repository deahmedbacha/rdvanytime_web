const mongoose = require('mongoose');


const procheSchema = new mongoose.Schema({
    acc_id:{
        type: 'string',
        required: true, 
        unique: true
    },
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
    //adresse
    rue:{
        type: String,
        default: null
    },
    rueNumero:{
        type: Number,
        default: null
    },
    ville:{
        type: String,
        default: null
    },
    codePostale:{
        type: Number,
        default: null
    },
    //nationalité
    pays:{
        type: String,
        default: null
    },
    dateNaissance:{
        type: Date,
        default: null
    },
    sexe:{
        type: Boolean,
        default: null
    },
    relation:{
        type: String,
        default: null
    },
});

module.exports = mongoose.model('Proche', procheSchema);