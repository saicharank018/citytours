const jwt=require('jsonwebtoken')
const {SECRET_KEY}=require('../keys')
const mongoose=require('mongoose')
const User=mongoose.model('User')
module.exports=(req,res,next)=>{
    //authorization==Bearer <token we gave>
    const {authorization}=req.headers
    console.log(authorization)
    if(!authorization){
        return res.status(401).json({error:'you must be logged in'})
    }
    //here we are replacing Bearer word with empty space finally we remain the token only 
    const token=authorization.replace('Bearer ','')
    jwt.verify(token,SECRET_KEY,(err,payload)=>{
        if(err){
            return res.status(401).json({error:'you must be logged in'})
        }
        const {_id}=payload
        User.findById({_id:_id}).then(userdata=>{
            req.user=userdata
            next()
        })
       
    })

}