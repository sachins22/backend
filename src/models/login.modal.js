import mongoose from "mongoose";


const LoginSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const LModal= mongoose.model('loginModal',LoginSchema)

export default LModal;