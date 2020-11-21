import React,{useContext,useReducer, useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route, Switch, useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar'
import Home from './components/home'
import Login from './components/Login'
import SignUp from './components/Signup'
import Cart from './components/Cart'
import PlacesFran from './components/placesFrance'
import PlacesInd from './components/placesIndia'
import PlacesIta from './components/placesItaly'
import PlacesLon from './components/placesLondon'
import About from './components/about'
import Order from './components/order'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext=React.createContext()
const Routing =()=>{
  const history=useHistory()
  const {state,dispatch} =useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }
    else{
      history.push('/login')
    }
  },[])
return(
  //switch will allow us to work any one route at a time
  <Switch >
    <Route exact path='/'>
         <Home/>
    </Route>
    <Route path='/login'>
         <Login/>
    </Route>
    <Route path='/signup'>
         <SignUp/>
    </Route>
    <Route path='/cart'>
         <Cart/>
    </Route>  
    <Route path='/orders'>
         <Order/>
    </Route>  
    <Route path='/about'>
         <About/>
    </Route>  
    <Route path='/places/India' >
        <PlacesInd/>
    </Route>
    <Route path='/places/London' >
        <PlacesLon/>
    </Route>
    <Route path='/places/Italy' >
        <PlacesIta/>
    </Route>
    <Route path='/places/France' >
        <PlacesFran/>
    </Route>
  </Switch>
)
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
   <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
       <Navbar/>
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>     
  );
}

export default App;
