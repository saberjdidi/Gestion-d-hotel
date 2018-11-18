const mongoose = require('mongoose');

const chambre = new mongoose.Schema({
    
    numeroChambre: Number,
    nombrePlace: Number,
    typeChambre : String
});

module.exports = chambre;