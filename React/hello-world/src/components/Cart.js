import React, {useEffect,useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import  M from "materialize-css"
const Cart =()=>{
  const history=useHistory()
  let dummy=[]
  const [item,setItem]=useState([])
  console.log(item)
    useEffect(()=>{
      fetch("/getItem",{
        // signal:signal,
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
        console.log(results)
        dummy=results.items
        setItem(dummy)
       console.log(dummy)
      } 
    })
    }
  ,[]) 
  const addOrder=(postid,title,price,img)=>{
   
    fetch("/addOrder",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        itemId:postid,  
        img:img,
        title:title,
        price:price
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html:data.error,classes:"#c62828 red darken-3"})
      }
      else{
        M.toast({html:data.msg,classes:"#43a047 green darken-1"})
        history.push('/orders')
      }
    })
    fetch('/deleteItem',{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
      body:JSON.stringify({
        itemId:postid
      })

    }).then(res=>res.json())
  }
  
  const remove=(postid)=>{
    console.log(postid)
    fetch('/deleteItem',{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
      body:JSON.stringify({
        itemId:postid
      })

    }).then(res=>res.json())
    .then(res=>{
      if(res.error){
        M.toast({html:res.error,classes:"#c62828 red darken-3"})
      }
      else{
        M.toast({html:res.msg,classes:"#43a047 green darken-1"})
        fetch("/getItem",{
          // signal:signal,
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
          console.log(results)
          dummy=results.items
          setItem(dummy)
         console.log(dummy)
        } 
      })
        
      }
    })
  }
 return(
   <div>
    {
      item.map((i)=>{
        return(
        <div className='container'>
        <div className="row citycard">
  {/*<div className='col-sm-8 col-lg-6 col-md-8'>*/} 
          
          <div className="card col-sm-7 col-md-8" style={{"maxWidth": '100%','width' :'35rem', 'padding':'10px','paddingBottom':'0px'}} >
          <Link to={'/places/'+i.title} >
            <img className="card-img-top" src={i.img} alt="Card image cap" />
            </Link>
            <div className="card-body">
            <h5 className="card-title city-title" >{i.title} </h5>      
          
       {/* <a href="/signup" className="btn btn-primary ">Go somewhere</a>*/} 
            </div>
            <div>
              <button type="button" className ="btn btn-sm btn-success" onClick={()=>addOrder(i.item,i.title,i.price,i.img)}  >Add to orders</button>
              <button type="button" className ="btn btn-sm btn-success float-right" onClick={()=>remove(i.item)} >Remove from cart</button>
            </div>
          </div>   
        </div>
        </div>
      )})
    } 
   </div>
 )
}
  export default Cart