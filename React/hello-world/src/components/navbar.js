import React, {useContext} from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from './logo.jpg';
import {UserContext} from '../App'
import M from "materialize-css"

const Navbar=()=>
{
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  console.log(state)
  const auth=()=>{
    if(state){
      return [
        <li className="tab right">
          <button className=" btn #f44336 red" style={{"color":"white"}} onClick={
            ()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              M.toast({html:"Looking forward to see You back",classes:"#00c853 green accent-4"})
              history.push('/signup')
            }
          }>Logout</button>
        </li>
      ]
    }
    else{
      return [
        <li className="tab  right"><Link to="/login">Login</Link> </li>,
        <li className="tab right"><Link to="/signup">Sign Up</Link></li>
      ]
    }
  }
  const renderlist=()=>{
    if(state){
      return [
        <li className="tab "><Link to="/cart">Cart </Link></li>,
        <li className="tab"><Link to="/orders">Orders</Link></li>
      ]
    }
    // else{
    //   console.log(state)
    //   return [
    //     <li className="tab"><Link to="/signup">SignUp</Link></li>,
    //     <li className="tab "><Link to="/login">Login </Link></li>
    //   ]
    // }
  }
   return(
   <div>
  <nav className="nav-extended">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo left"><img src={logo} className="img-fluid logo"/></Link>
      <ul>
        {auth()}
       </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><Link  to={state?"/":"/login" }>Home</Link></li>
        {renderlist()}
        <li className="tab"><Link to="/about">About us</Link></li>
      </ul>
    </div>
  </nav>
</div>
     )
   }
 
 export default Navbar








