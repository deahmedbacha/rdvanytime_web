const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
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
    taille:{
        type: Number,
        default: null
    },
    poids:{
        type: Number,
        default: null
    },
    blood_type:{
        type: String,
        default: null
    },
    Fumeur:{
        type: Boolean,
        default: false
    },
    Alcool:{
        type: Boolean,
        default: false
    },
    Marie:{
        type: Boolean,
        default: false
    },
    maladieCronique: { 
        type: [String],
        default: null 
    },
    chirurgie: { 
        type: [String], 
        default: null 
    },
    allergie: { 
        type: [String], 
        default: null 
    },
    medicament: { 
        type: [String], 
        default: null 
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
});
module.exports = mongoose.model('User', UserSchema);