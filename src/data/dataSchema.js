import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    createdAt:{
        type: Date,
        dafault:Date.now,
    }
});

const Data = mongoose.model('Data',UserSchema);

export default Data;