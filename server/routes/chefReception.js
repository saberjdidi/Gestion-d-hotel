const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/Gestion_Hotel', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const chambreSchema = require('../models/chambre');
const chambreModel = mongoose.model('chambre', chambreSchema);

const tarifSchema = require('../models/tarif');
const tarifModel = mongoose.model('tarif', tarifSchema);

const factureSchema = require('../models/facture');
const factureModel = mongoose.model('facture', factureSchema);

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

//CRUD tarif
router.post('/tarif', async(req, res) => {
    const result = await tarifModel.create(req.body)
    res.send(result)
});
router.get('/tarif', async(req, res) => {
    const result = await tarifModel.find()
    res.send(result)
});
router.put('/tarif/:id', async(req, res) => {
    const result = await tarifModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/tarif/:id', async(req, res) => {
    const result = await tarifModel.remove({_id: req.params.id})
    res.send(result)
});

//CRUD chambre
router.post('/chambre', async(req, res) => {
    const result = await chambreModel.create(req.body)
    res.send(result)
});
router.get('/chambre', async(req, res) => {
    const result = await chambreModel.find()
    res.send(result)
});
router.put('/chambre/:id', async(req, res) => {
    const result = await chambreModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/chambre/:id', async(req, res) => {
    const result = await chambreModel.remove({_id: req.params.id})
    res.send(result)
});

module.exports = router;