const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const cartSchema= new mongoose.Schema({
    item:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    addedBy:{
        type:ObjectId,
        ref:"User"
    }
})
mongoose.model("Cart",cartSchema)