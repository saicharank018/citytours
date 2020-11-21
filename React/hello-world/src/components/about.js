import React from 'react'

/**
* author
* function about
**/

const about = (props) => {

  return(
    <div style={{"backgroundColor":"#F8EFBA81"}}>
        <div className="jumbotron text-center">
         <h3 style={{"font-family": "'PT Sans', sans-serif"}}>About us</h3>
         <p style={{"font-family": "'Pacifico', cursive"}}>This is the thing You people want to know about us</p>
        </div>
        <div className="row ">
          <div className="col-sm-6 col-md-6">
            <img className="img img-fluid img-thumbnail rounded-circle" style={{"width":"200px","height":"300px","float":"left" }} src="../sai1.jpg " alt="Saicharan kukudala"/>
            <div  style={{"float":"left","marginLeft":"30px"}}>
              <h4  style={{"display":"block","textAlign":"center"}} className="text-center align-items-center"> Saicharan kukudala</h4>
              <h6 className="blockquote-footer">Developer of this website</h6>
              <h6>Follow me on</h6>
              <button  style={{"margin":"10px"}}type="button" className="btn icon fab fa-twitter" onClick={()=>{window.open("https://mobile.twitter.com/saicharankuku","_blank") }}></button>
              <button style={{"margin":"10px"}}type="button" className=" btn icon fab fa-facebook-square"  onClick={()=>{window.open("https://m.facebook.com/saicharan.kukudala?ref=bookmarks","_blank") }}></button>
              <button style={{"margin":"10px"}} type="button" className=" btn icon fab fa-snapchat" onClick={()=>{window.open("https://www.snapchat.com/add/saicharankuku19","_blank") }} ></button>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <img className="img img-fluid img-thumbnail rounded-circle" style={{"width":"200px","height":"300px","float":"left" }}src=" ../pavan.jpeg" alt="pavan kaushal"/>
            <div style={{"float":"left","marginLeft":"30px"}}>
                <h4  style={{"display":"block","align":"center"}}className="text-center"> Pavan kaushal</h4>
                <h6 className="blockquote-footer">Developer of this website</h6>
                <h6>Follow me on</h6>
                <button  style={{"margin":"10px"}}type="button" className="btn icon fab fa-instagram"   onClick={()=>{window.open("","_blank") }}></button>
                
            </div>
          </div>
        </div>  
    <div className="text-center" style={{"margin":"5% 25%"}}>
        <h3 >If you Have any Queries send ur Query</h3> 
      
    <form >
      <div className="form-group">
        <input  className="form-control" type="text" required placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <input  className="form-control" type="email" required placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <textarea className="form-control" type="text" required placeholder="Enter your Query" />
      </div>
      <input type="submit" className="btn btn-info" />
    </form>
    </div>
<footer style={{"margin":"5% 15%"}}>City tours website is liscenced and copyright@2020 and copy from this website and other content is avoided and lead to copy right issues 🤣😂 </footer>
    <br/>
    </div>
   )
 }
export default about