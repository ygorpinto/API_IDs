import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require:true,
    },
    email: {
        type: String,
        require:true,
    },
    createdAt:{
        type: Date,
        dafault:Date.now,
    }
});

const Data = mongoose.model('Data',UserSchema);

export default Data;