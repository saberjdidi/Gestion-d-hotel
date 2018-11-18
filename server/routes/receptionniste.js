const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/Gestion_Hotel', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const chambreSchema = require('../models/chambre');
const chambreModel = mongoose.model('chambre', chambreSchema);

const clientSchema = require('../models/client');
const clientModel = mongoose.model('clients', clientSchema);

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

//CRUD client
router.post('/client', async(req, res) => {
    const result = await clientModel.create(req.body);
    res.send(result)
});
router.get('/client', async(req, res) => {
    const result = await clientModel.find()
    res.send(result)
});
router.put('/client/:id', async(req, res) => {
    const result = await clientModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/client/:id', async(req, res) => {
    const result = await clientModel.remove({_id: req.params.id})
    res.send(result)
});

module.exports = router;