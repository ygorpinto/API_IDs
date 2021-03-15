const mongoose = require('mongoose');

const URI = 'mongodb+srv://relatorio-ivt:zizu0255@cluster0.dubd4.mongodb.net/relatorioivt'

const mongoDBConnect = async () => {
   await mongoose.connect(URI,{ 
       useUnifiedTopology: true , 
       useNewUrlParser: true }); 
   console.log('db connected ..');  
}

module.exports = mongoDBConnect;