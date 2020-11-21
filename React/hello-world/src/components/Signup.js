import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


  const Signup=(props) => {
   
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [mobile, setMobile]=useState('')
  const [password, setPassword]=useState('')
  const history=useHistory()
  
  const handler=(e)=>{
    e.preventDefault();
    if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     M.toast({html:"invalid Email",classes:"#c62828 red darken-3"})
       return 
    }
    if(!/^[6-9]\d{9}$/.test(mobile)){
      M.toast({html:"invalid Mobile number",classes:"#c62828 red darken-3"})
      return 
    }
if(password.length<6){
  M.toast({html:"please choose strong password",classes:"#c62828 red darken-3"})
      return 
    }
  else{
    console.log(name,email,mobile,password)
    fetch("/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
            name:name,
            email:email,
            password:password,
          mobile:mobile
        })
      }).then(res=>res.json())
     .then(data=>{
       if(data.error){
        M.toast({html:data.error,classes:"#c62828 red darken-3"})
       }
       else{
         M.toast({html:data.msg,classes:"#43a047 green darken-1"})
         history.push('/login')
       }
      })
}}
  return(
  <div className="card col-8 col-lg-4 login-card mt-3 hv-center  mycard" >
   <div className="myauth">
    <form onSubmit={(e)=>handler(e)} method="post" >
     <div className="form-group" >
      <label  htmlFor="name">Enter Name</label>
      <input className="form-control" type="text"
      value={name} 
      onChange={ (e)=>setName(e.target.value)}
      required />
     </div>
     <div className="form-group" >
      <label htmlFor="email" >Email</label>
      <input className="form-control" type ="email" required 
         value={email} 
      onChange={ (e)=>setEmail(e.target.value)}
      />
     </div>
     <div className="form-group" >
      <label htmlFor="mobile" >Mobile Number</label>
      <input className="form-control" type="text"  required
      value={mobile} 
      onChange={ (e)=>setMobile(e.target.value)} />

     </div>
     <div className="form-group" >
      <label htmlFor="password" >Password</label>
      <input className="form-control" type="password"   required 
      value={password} 
      onChange={(e) =>setPassword(e.target.value)} />
     </div>
     <div>
      <button className="btn btn-success" type="submit" >Sign up</button>
     </div>
    </form>
    <div className="account" >
     <h6 ><Link to="/login">Have an account</Link> </h6> </div>
    </div>
    </div>
  )
  }
 
 export default Signup
 
 
 
 
 
 