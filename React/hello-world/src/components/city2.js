import React from 'react'
const City2=({post})=>{
  // Or with jQuery
  console.log(post.img)
 return(
    <div>
      <div className='container'>
         <div className="row citycard">
  {/*<div className='col-sm-8 col-lg-6 col-md-8'>*/} 
        <div className="card col-sm-8 col-md-8" style={{"max-width": '100%','width' :'35rem', 'padding':'10px','padding-bottom':'0px'}} >

          <img className="card-img-top" src={post.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title city-title" >{post.title} </h5>
       {/* <a href="/signup" className="btn btn-primary ">Go somewhere</a>*/} 
  </div>
</div>
</div>
</div>
</div>
)}  
export default City2;