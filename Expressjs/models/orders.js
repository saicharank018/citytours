const mongoose=require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const orderSchema=new mongoose.Schema({
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
        orderedDate:{
            type:String,
            required:true
        },
        orderedBy:{
            type:ObjectId,
            ref:"User"
        }
})
mongoose.model('Orders',orderSchema)