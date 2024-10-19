import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        lowercase: true
    },
    passward: {
        type:String,
        required:true
    }
}, {timestamps:true})

export const User = mongoose.model("User", userSchema)  // users prural and lowercase