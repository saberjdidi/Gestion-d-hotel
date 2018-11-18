const mongoose = require('mongoose');

const table = new mongoose.Schema({
    numeroTable: Number,
    nombrePlace: Number,
    etatTable: String
});
module.exports = table;