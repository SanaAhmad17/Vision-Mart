import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { signOut ,onAuthStateChanged} from 'firebase/auth'
const HandleAuth=()=>{
 const [user ,setUser]=useState(JSON.parse(localStorage.getItem('user')!))
 const userString = localStorage.getItem('user');
  const usere = userString ? JSON.parse(userString) : null;
  useEffect(()=>{
  // const userString = localStorage.getItem('user');
  // const usere = userString ? JSON.parse(userString) : null;
setUser(usere)
  },[])
  
    function Logout() {
        signOut(auth)
        .then(() => {
          console.log('user logged out')
          localStorage.removeItem('user')
          setUser(null)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    if(user){
    return(
      <ul className="navbar-nav">
      <li className="nav-item">
    <button onClick={Logout} style={{backgroundColor:'white'}}>Logout</button>
      </li>
    </ul>
    )}
    else{
        return(
    <>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link  className="nav-link" to="/loginScreen">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signupScreen">Signup</Link>
      </li>
  
    </ul>
    </>)
    }
  }
 
export default HandleAuth;