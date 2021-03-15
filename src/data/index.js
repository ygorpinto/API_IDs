const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true,
    },
    clientes: {
        type: String,
        require:true,
    },
    fundos: {
        type:String,
        require:true,
    },
    reuniao:{
        type:String,
        require:true,
    },
    sistema:{
        type: String,
        require:true,
    },
    performit:{
        type: String,
        require:true,
    },
    conhecimento:{
        type: String,
        require:true,
    },
    createdAt:{
        type: Date,
        dafault:Date.now,
    }
});

const Data = mongoose.model('Data',DataSchema);

module.exports = Data;