import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    grupo: {
        type: String,
        required:true,
    },
    id:{
        type: String,
        required:true
    }
});

const Data = mongoose.model('Data',UserSchema);

export default Data;