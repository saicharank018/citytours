const express=require('express')
const app= express()
const PORT=5000
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')


mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo')
})
mongoose.connection.on('error',(err)=>{
    console.log(' not connected to mongo',err)
})

//y7BJAekx7vLW8xeA
//mongodb+srv://sai:<password>@cluster0-4z4g7.mongodb.net/<dbname>?retryWrites=true&w=majority
// // middle ware is some thing that takes the request first before it reaching to the route
// const customMiddleware=(req,res,next)=>{
//     //the code to be executed
//     console.log('middle ware');
//     next()//it says that the middle ware is completed
// }
// //app.use(customMiddleware)
// //if we use like the above the middleware is executed for every route
// app.get('/',(req,res)=>{
//     res.send('hello sai')
// })
// //we use below as the middle ware to run for specific route
// app.get('/about',customMiddleware,(req,res)=>{
//     res.send('about page')
// })

//importing the user schema
require('./models/user')
require('./models/cart')
require('./models/orders')
app.use(express.json())
app.use(require('./Routes/signup'))
app.use(require('./Routes/cart'))
app.use(require('./Routes/orders'))



app.listen(PORT)