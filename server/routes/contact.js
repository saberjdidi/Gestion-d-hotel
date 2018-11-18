const router = require('express').Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/Gestion_Hotel', {
    useNewUrlParser: true,
    useCreateIndex: true,
});

const contactSchema = require('../models/contact');
const contactModel = mongoose.model('contact', contactSchema);


//CRUD contact
router.post('', async(req, res) => {
    const result = await contactModel.create(req.body);
    res.send(result)
});
router.get('', async(req, res) => {
    const result = await contactModel.find()
    res.send(result)
});
router.put('/:id', async(req, res) => {
    const result = await contactModel.update({_id: req.params.id}, {$set: req.body})
    res.send(result)
});
router.delete('/:id', async(req, res) => {
    const result = await contactModel.remove({_id: req.params.id})
    res.send(result)
});

module.exports = router;