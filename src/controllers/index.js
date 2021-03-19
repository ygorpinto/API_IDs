import Data from '../data/index.js';
import express from 'express';

const router = express.Router();

router.get('/listall', async (req,res) => {
    try {
        const data = await Data.find();
        return res.send(data);
    } catch (err){
        return res.send(err);
    }
});

router.get('/list/:name', async (req, res) => {
    try{
        const data = await Data.find({name:req.params.name}).exec();
        return res.send(data);
    } catch(err){
        return res.send(err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const data = await Data.create(req.body);
        return res.send(data);
    } catch (err) {
        return res.send(err);
    }
});

router.delete('/delete', async (req,res) => {
    try{
        const data = await Data.deleteMany();
        return res.send(data);
    } catch (err) {
        return res.send(err);
    }
})

export default router;