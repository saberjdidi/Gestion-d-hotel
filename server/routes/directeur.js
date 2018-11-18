const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Gestion_Hotel', {
    useNewUrlParser: true,
    useCreateIndex: true
});
const reservationSchema = require('../models/reservation');
const reservationModel = mongoose.model('reservation', reservationSchema);

const factureSchema = require('../models/facture');
const factureModel = mongoose.model('facture', factureSchema);

const clientSchema = require('../models/client');
const clientModel = mongoose.model('clients', clientSchema);
const chambreSchema = require('../models/chambre');
const chambreModel = mongoose.model('chambres', chambreSchema);
const salleSchema = require('../models/salle');
const salleModel = mongoose.model('salles', salleSchema);
const tableSchema = require('../models/table');
const tableModel = mongoose.model('tables', tableSchema);

//CRUD reservation
router.post('/reservation', async(req, res)=>{
    const result = await reservationModel.create(req.body)
    res.send(result)
});
router.get('/reservation', async(req, res)=>{
    const result = await reservationModel.find()
    res.send(result)
});
router.put('/reservation/:id', async(req, res)=>{
    const result = await reservationModel.update({_id:req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/reservation/:id', async(req, res)=>{
    const result = await reservationModel.remove({_id:req.params.id})
    res.send(result)
});

//CRUD facture
router.post('/facture', async(req, res) => {
    const result = await factureModel.create(req.body)
    res.send(result)
});
router.get('/facture', async(req, res) => {
    const result = await factureModel.find()
    res.send(result)
});
router.put('/facture/:id', async(req, res) => {
    const result = await factureModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/facture/:id', async(req, res) => {
    const result = await factureModel.remove({_id: req.params.id})
    res.send(result)
});

module.exports = router;