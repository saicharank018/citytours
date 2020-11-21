import React  from 'react'
import {Link} from 'react-router-dom'
import  M from "materialize-css"

const City=({post})=>{

  const clickHandler=()=>{
      
      // console.log(post.id)
      fetch("/addItem",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        title:post.title, 
        img:post.img1, 
        price:post.price,
        itemId:post.id
      })
      }).then(res=>res.json())
      .then((data)=>{
        if(data.error){
          M.toast({html:data.error,classes:"#c62828 red darken-3"})
        }
        else{
          M.toast({html:data.msg,classes:"#43a047 green darken-1"}) 
        }
      })
      // .catch(err=>{
      //   console.log(err)
      // })
  }
 return(
    <div>
      <div className='container'>
        <div className="row citycard">
  {/*<div className='col-sm-8 col-lg-6 col-md-8'>*/} 
          
          <div className="card col-sm-6 col-md-8" style={{'width' :'35rem', 'padding':'10px'}} >
          <Link to={'/places/'+post.title} >
            <img className="card-img-top" src={post.img1} alt="Card image cap" />
            </Link>
            <div className="card-body">
            <h5 className="card-title city-title" >{post.title} </h5>      
            </div>
            <div align="left">            
              <h6>Price:{post.price}$</h6>
            </div>
            <div align="right">
              <button type="button" className ="btn btn-success" onClick={()=>{clickHandler()}}style={{"float":"right"}}>Add to Cart</button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
)}  
export default City;