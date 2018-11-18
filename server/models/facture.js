const mongoose = require('mongoose');

const facture = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    montant : Number
});
module.exports = facture;