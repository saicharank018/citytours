import React, {useEffect,useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import  M from "materialize-css"
const Order =()=>{
  const history=useHistory()
  let dummy=[]
  let total1=0
  const [item,setItem]=useState([])
  const [total,setTotal]=useState(0)
  console.log(total)
  const user=JSON.parse(localStorage.getItem("user"))
  useEffect(()=>{
    fetch("/getOrders",{
      method:"get",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    })
    .then(res=>res.json())
    .then((results)=>{
      if(results.error){
        M.toast({html:results.error})
      }
      else{
        // console.log(results)
        dummy=results.items
        setItem(dummy)
        total1=results.total
        setTotal(total1)
        console.log(results.total)
        //  console.log(dummy)
      } 
    })
  }
  ,[]) 
  
  return(
    <div >
     <div className="row" style={{"backgroundColor":"#d2dae2"}}>
       <h2 style={{"margin":"3%","font-family": "'PT Sans', sans-serif"}}>Account Info</h2>
      <div style={{"margin":"10%"}} align="left">
        <img src="../user.png" className="rounded-circle img-fluid img-thumbnail" style={{"height":"200px","width":"200px","float":"left"}} alt={user.name}/>
        <div className="col-sm-4" style={{"float":"left","marginLeft":"30px"}}>
            <h4  style={{"display":"block","align":"center"}}className="text-center"> Name:{user.name}</h4>
            <h4  style={{"display":"block","align":"center"}}className="text-center"> Email:{user.email}</h4>
        </div>
      </div>
      <div align="right" className="container">
        <h4 style={{"font-family": "'Shadows Into Light', cursive"}}className="text-align-right">Value of items is {total}</h4>
      </div>
    </div>
    <h2 style={{"margin":"3%","font-family": "'PT Sans', sans-serif"}}>Orders</h2>
    {
      
      item.map((i)=>{
        return(
      <div className="container">
        <div className="row citycard">         
          <div className="card col-sm-7 col-md-8" style={{"maxWidth": '100%','width' :'35rem', 'padding':'10px','paddingBottom':'0px'}} >
          <Link to={'/places/'+i.title} >
            <img className="card-img-top" src={i.img} alt="Card image cap" />
            </Link>
            <div className="card-body">
            <h5 className="card-title city-title" >{i.title} </h5>      
            <p className="blockquote-footer" style={{"float":"right"}}>Ordered on  {i.orderedDate} </p>      
            </div>
          </div>   
        </div>
        </div>
      )})
    } 
   </div>
 )
}
  export default Order