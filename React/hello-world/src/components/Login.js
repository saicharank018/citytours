import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from "materialize-css"
import {UserContext} from '../App'
const Login =()=>{
  const {state,dispatch}=useContext(UserContext)
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const history=useHistory()
  const handler=(e)=>{
    e.preventDefault();
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     M.toast({html:"invalid Email",classes:"#c62828 red darken-3"})
       return 
    }
    fetch('/signin',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.error){
       M.toast({html:data.error,classes:"#c62828 red darken-3"})
      }
      else{
        //console.log(data.token)
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER",payload:data.user})
        M.toast({html:"Login succesfull",classes:"#43a047 green darken-1"})
        history.push('/')
      }
     })
  }
  
  return(
  <div className="card col-8 col-lg-4 login-card mt-3 hv-center  mycard" >
   <div className="myauth">
    <form onSubmit={(e) =>{handler(e)}}>
     <div className="form-group" >
      <label htmlFor="email" >Email</label>
      <input className="form-control" type="email" required 
       value={email} 
      onChange={(e)=>{setEmail(e.target.value)}}
      />
     </div>
     <div className="form-group" >
      <label htmlFor="password" >Password</label>
      <input className="form-control" type="password"  required 
       value={password} 
      onChange={(e)=>{setPassword(e.target.value)}}
      />
     </div>
     <div>
      <button  className="btn btn-outline-success" type="submit" >Login</button>
     </div>
    </form>
    <div className="account">
      <h6><Link to='/signup'> Doesn't Have Account </Link> </h6>
     </div>
    </div>
    </div>
  )
  }
 
 export default Login