const mongoose = require('mongoose');
const salle = new mongoose.Schema({
    etatSalle: String,
    typeSalle: String
});
module.exports = salle;