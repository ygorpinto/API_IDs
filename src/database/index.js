const mongoose = require('mongoose');

require('dotenv').config();

const mongoDBConnect = async () => {
   await mongoose.connect(`${process.env.MONGODB_URI}`,{ 
       useUnifiedTopology: true , 
       useNewUrlParser: true }); 
   console.log('db connected ..');  
}

module.exports = mongoDBConnect;