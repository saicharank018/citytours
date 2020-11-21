const express=require('express')
const router= express.Router()
const mongoose=require('mongoose')
const { json } = require('express')
const jwt=require('jsonwebtoken')
const {SECRET_KEY}=require('../keys')
const requireLogin=require('../middleware/requireLogin')


//importing User model
const User=mongoose.model('User')

//this is protected resource
// router.post('/protected',requireLogin,(req,res)=>{
//     res.send('helloworld')
// })
router.post('/signup',(req,res)=>{
    console.log(req.body)
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const mobile=req.body.mobile;
    console.log(name)
    console.log(email)
    console.log(mobile)
    console.log(password)


    if(!email || !mobile || !password || !name){
        return res.status(422).json({error:'Not success'})
    }
    //checking whether the email exists in database or not
    User.findOne({email:email})
    .then((saveduser)=>{
        if(saveduser){
            return res.status(422).json({error:'user already present with that mail'})
        }
        const user =new User({
            name:name,
            email:email,
            password:password,
            mobile:mobile
        })
        user.save()
        .then((user)=>{
            return res.status(200).json({msg:'succesfully saved'})
        })
        .catch((err)=>{
            console.log(err)
    })
        })
.catch((err)=>{
    console.log(err)
})
    
})    
router.post('/signin',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    //checking the password
    User.findOne({email:email})
    .then(saveduser=>{
        if(!saveduser){
            return res.status(422).json({error:'Email doesnot exist'})
        }
        if(password!=saveduser.password){
            return res.status(422).json({error:'Incorrect password'})
        }
        const token=jwt.sign({_id:saveduser._id},SECRET_KEY)
        const _id=saveduser._id
        const name=saveduser.name
        const email=saveduser.email
        return res.status(200).json({token,user:{_id,name,email}})

    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router