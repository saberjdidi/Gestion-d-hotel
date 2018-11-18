const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); 
    next();
  });

app.use(bodyparser.json());

const auth = require('./server/routes/auth');
app.use('/auth', auth);

const directeur = require('./server/routes/directeur');
app.use('/directeur', directeur);

const chefReception = require('./server/routes/chefReception');
app.use('/chefReception', chefReception);

const receptionniste = require('./server/routes/receptionniste');
app.use('/receptionniste', receptionniste);

const maitreHotel = require('./server/routes/maitreHotel');
app.use('/maitreHotel', maitreHotel);

const contact = require('./server/routes/contact');
app.use('/contact', contact);

app.listen(port, err => {
    console.log(`connect with port ${port}`)
});