const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const requireLogin=require('../middleware/requireLogin')

const Cart=mongoose.model('Cart')
// router.post('/addItem',requireLogin,(req,res)=>{
//     const id=req.body.id
//     console.log(id)
//     res.status(200).json({msg:"success"})
// })
router.post('/addItem',requireLogin,(req,res)=>{
    const item=req.body.itemId
    const title=req.body.title
    const img=req.body.img
    const price=req.body.price
    console.log(item)
    // Cart.find({item:item,addedBy:req.user})
    // .then((data)=>{
    //     if(data){
    //         return res.status(401).json({msg:"Item already in cart"})
    //     }
    // })
    const cart=new Cart({
        item:item,
        title:title,
        price:price,
        img:img,
        addedBy:req.user._id
    })
    cart.save()
    .then(savedItem=>{ 
        if(savedItem){
            return res.status(200).json({msg:"Added to cart succesfully"})
        }
        else{
          return res.status(401).json({error:"item cannot be added"})  
        }

    })
    .catch(err=>{
        console.log(err)
    })

})
router.get('/getItem',requireLogin,(req,res)=>{
    const id=req.user._id
    Cart.find({addedBy:id})
    .then((items)=>{
        console.log(items)
        return res.status(200).json({items})
    })
    .catch(err=>{
        res.status(401).json({err:"no items added to cart"})
    })
})
router.delete('/deleteItem',requireLogin,(req,res)=>{
    const id=req.user._id
    const itemId=req.body.itemId

    Cart.deleteOne({addedBy:id,item:itemId})
    .then(deletedItem =>{
        if(deletedItem){
            return res.status(410).json({msg:"succesfully deleted"})
        }
        else{
            return res.status(200).json({error:"Item not present in cart"})
        }
    })
    .catch(err =>{
        // console.log(err)
        return res.status(410).json({error})})  
})
module.exports=router