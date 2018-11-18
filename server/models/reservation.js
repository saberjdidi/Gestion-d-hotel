const mongoose = require('mongoose');
const reservation = new mongoose.Schema({
    dateReservation: {type:Date, default:Date.now()},
    dateArrive : Date,
    dateDepart : Date,
    nombrePersonne: Number,
    client: String,
    chambre : Number,
    salle : String,
    table : Number
});
module.exports = reservation;