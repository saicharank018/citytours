import React ,{useState} from 'react'
import {posts} from "./citydata"
import {Link} from "react-router-dom"
import M from "materialize-css"

/**
* @author
* @function Cartlist
**/

const Cartlist = (props) => {
    const values=props.value
    let dummypost={}
    const [post,setPost]=useState({})
   
    // for(var i=0;i<posts.length;i++){
    //     if(posts[i].item==values){
    //         post=posts[i]
    //         console.log(post)
    //         break;
    //     }
    //     console.log(values)
    // }
    posts.forEach((posting)=>{
        
        if(posting.id==values){
            dummypost=posting
            setPost(dummypost)
        }
    })
    console.log(dummypost)
// const removeitem=()=>{
//     fetch("/deleteItem",{
//         method:"delete",
//         headers:{
//             "Content-Type":"application/json",
//             "authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             itemId:post.id
//         })
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//         if(data.error){
//         M.toast({html:data.error,classes:"#c62828 red darken-3"})
//         }
//         else{
//         M.toast({html:data.msg,classes:"#43a047 green darken-1"})
//         }
//     })
// }
// const orderitem=()=>{
//     fetch("/deleteItem",{
//         method:"delete",
//         headers:{
//             "Content-Type":"application/json",
//             "authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             itemId:post.id
//         })
//     })
//     .then(res=>res.json())
//     .then((data)=>{
//         if(data.error){
//         M.toast({html:data.error,classes:"#c62828 red darken-3"})
//         }
//         else{
//         M.toast({html:data.msg,classes:"#43a047 green darken-1"})
//         }
//     })
// }
  return(
    <div>
        <div className='container'>
        <div className="row citycard">
  {/*<div className='col-sm-8 col-lg-6 col-md-8'>*/} 
          
          <div className="card col-sm-6 col-md-8" style={{"max-width": '100%','width' :'35rem', 'padding':'10px','padding-bottom':'0px'}} >
          <Link to={'/places/'+post.title} >
            <img className="card-img-top" src={post.img1} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title city-title" >{post.title} </h5>      
          
       {/* <a href="/signup" className="btn btn-primary ">Go somewhere</a>*/} 
            </div>
            </Link>
            <div align="left">           
              <h6>Price:{post.price}$</h6>
            </div>
            <div align="right">
              <button type="button" class="btn btn-success" onClick={()=>{}}style={{"float":"left"}}>Remove Cart</button>
            </div>
            <div align="left">
              <button type="button" class="btn btn-success" onClick={()=>{}}style={{"float":"right"}}>Add to Order</button>
            </div>
          </div>   
        </div>
      </div>
    


    </div>
   )}

export default Cartlist