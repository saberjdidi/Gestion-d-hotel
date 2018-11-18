const mongoose = require('mongoose');

const user = new mongoose.Schema({
    nom : String,
    prenom : String,
    telephone : Number,
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : String,
    role : {
        type: String,
        enum : ['directeur', 'chef-reception', 'receptionniste', 'maitre-hotel'],
        default: 'receptionniste'
    }
});
module.exports = user;