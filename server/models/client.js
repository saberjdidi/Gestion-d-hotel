const mongoose = require('mongoose');

const client = new mongoose.Schema({
    nom : String,
    prenom : String,
    telephone : Number,
    adresse: String,
    nationalite: String,
    dateArrive: {type: Date, default: Date.now()},
    dateDepart: {type: Date, default: Date.now()},
    email: String
});
module.exports = client;