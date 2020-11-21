const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const requireLogin = require("../middleware/requireLogin")
const Orders = mongoose.model('Orders')
const _ = require('underscore-node');
router.post('/addOrder',requireLogin,(req,res)=>{
    let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
    const id=req.user._id
    const item=req.body.itemId
    const title=req.body.title
    const img=req.body.img
    const price=req.body.price
    console.log(date,month,year)
    const orders=new Orders({
        item:item,
        title:title,
        img:img,
        price:price,
        orderedDate: date+ "-" + month + "-" + year,
        orderedBy:id
    })
    orders.save()
    .then((orderedItem)=>{
        if(orderedItem){
            return res.status(200).json({msg:"sucessfully ordered"})
        }
        else{
            return res.status(401).json({error:"cannot be added"})
        }
    })
    .catch(error=>{
        return res.status(401).json({error})
    })

})
router.get('/getOrders',requireLogin,(req,res)=>{
    const id =req.user._id
    const total=0
    Orders.find({orderedBy:id})
    .then(items=>{
        console.log(items)
        if(items){
            console.log(items)
            const total = _.reduce(items, function(memo, reading){ return memo + reading.price; }, 0);
            console.log(total)
            return res.status(200).json({items,total})
        }
        else{
            return res.status(401).json({error:"cannot get items"})
        }
    })
    .catch(error=>{
        return res.status(401).json({error})
    })
})
module.exports=router