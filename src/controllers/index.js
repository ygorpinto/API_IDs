const Data = require('../data/index');
const express = require('express');

const router = express.Router();

router.get('/listall', async (req,res) => {
    const data = await Data.find();
    return res.send(data)
});

router.get('/list/:name', async (req, res) => {
    const data = await Data.findOne(req.params.name);
    return res.send(data);
});

router.post('/add', async (req, res) => {
    const data = await Data.create(req.body);
    return res.send(data);
});

router.delete('/delete', async (req,res) => {
    const data = await Data.findOneAndDelete(req.body);
    return res.send(data);
})

module.exports = router;