const mongoose=require('mongoose')
const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            requird:true
        },
        mobile:{
            type:String,
            requird:true
        }
    })
    mongoose.model("User",userSchema)