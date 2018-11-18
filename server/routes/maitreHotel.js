const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/Gestion_Hotel', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const salleSchema = require('../models/salle');
const salleModel = mongoose.model('salle', salleSchema);

const tableSchema = require('../models/table');
const tableModel = mongoose.model('table', tableSchema);

//CRUD salle
router.post('/salle', async(req, res) => {
    const result = await salleModel.create(req.body)
    res.send(result)
});
router.get('/salle', async(req, res) => {
    const result = await salleModel.find()
    res.send(result)
});
router.put('/salle/:id', async(req, res) => {
    const result = await salleModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/salle/:id', async(req, res) => {
    const result = await salleModel.remove({_id: req.params.id})
    res.send(result)
});

//CRUD table
router.post('/table', async(req, res) => {
    const result = await tableModel.create(req.body)
    res.send(result)
});
router.get('/table', async(req, res) => {
    const result = await tableModel.find()
    res.send(result)
});
router.put('/table/:id', async(req, res) => {
    const result = await tableModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/table/:id', async(req, res) => {
    const result = await tableModel.remove({_id: req.params.id})
    res.send(result)
});

module.exports = router