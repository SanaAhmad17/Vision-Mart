 import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { onAuthStateChanged } from 'firebase/auth';
import AuthProvider from './firebaseAuth';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBModal, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit';
import Colors from '../res/colors';
import { Link } from 'react-router-dom';
export default function Login () {
  const firebaseConfig = {
    apiKey: "AIzaSyBE8slxN4m1j_keBKTeh0pKCGJFnZb9I8U",
    authDomain: "visionmart-d8f03.firebaseapp.com",
    projectId: "visionmart-d8f03",
    storageBucket: "visionmart-d8f03.appspot.com",
    messagingSenderId: "206913073466",
    appId: "1:206913073466:web:afa8456855de14b4cfa003"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unRegistered = onAuthStateChanged(firebase.auth(), (user) => {
      console.log(user);
      setUser(prevUser => user as firebase.User | null); // Cast user to the correct type
    });
    return () => unRegistered();
  }, []);
  
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <div className="App">
      {user ? (
        <>
         <MDBDropdown >
         <MDBDropdownToggle color='success'><i className="fa-solid fa-user-large"></i>     {user.displayName}</MDBDropdownToggle>
         <MDBDropdownMenu className='p-3'>
           <MDBDropdownItem className='' style={{borderBottom:'1px solid black'}}><h6>{user.displayName}</h6>{user.email}<div><a href='/' style={{fontSize:'15px'}}>View and edit details</a></div></MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',color:'black'}}><i className="fa-solid fa-rectangle-list"></i> My Adds</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',color:'black'}}><i className="fa-regular fa-bell"></i> Notifications</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}><i className="fa-regular fa-heart"></i> My Favourites</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}><i className="fa-solid fa-clipboard-list"></i> Buy Buisness Packages</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}><i className="fa-solid fa-wallet"></i> Bought Packages and Billing</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}><i className="fa-regular fa-circle-question"></i> Help</MDBDropdownItem>
           <MDBDropdownItem className='fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}><i className="fa-solid fa-gears"></i> Settings</MDBDropdownItem>
           <MDBDropdownItem className=' fs-6' style={{padding:'3px',whiteSpace:'nowrap',color:'black'}}> <button style={{background:'none',border:'none'}} onClick={() => firebase.auth().signOut()}><i className="fa-solid fa-arrow-right-from-bracket"></i> Log Out</button></MDBDropdownItem>
         </MDBDropdownMenu>
       </MDBDropdown>
       </>
        // <div>
        //   <h3>Your Name: {user.displayName}</h3>
        //   <h5>Email: {user.email}</h5>
        //   <p>User ID: {user.uid}</p>
        //   <p>Phone Number: {user.phoneNumber}</p>
        //   <button onClick={() => firebase.auth().signOut()}>Log Out</button>
        // </div>
      ) : (
        <>
        <button className='btn m-2' onClick={toggleShow} style={{color:Colors.color4 ,boxShadow:'none'}}>Login</button>
        <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal} >
        <MDBModalDialog centered style={{height:'400px',width:'290px' }}>
          <MDBModalContent style={{justifyContent:'center'}}>
        <div className='bg-success p-2' style={{borderRadius:'5px'}}>
        <h6 className='d-flex justify-content-center' style={{color:Colors.color4}}>Welcome to</h6>
        <h3 className='d-flex justify-content-center' style={{color:Colors.color4, fontFamily: "'Orbitron',sans-serif",fontSize:'30px',textShadow:' 0 0 3px #FFFF00,1px 1px 2px black',textDecoration:' underline #3CB371 double 1px ' }}><i className="fa-solid fa-dragon" style={{color:Colors.color3}}></i>Vision-Mart</h3>
        <AuthProvider auth={firebase.auth()} />
        </div>
        </MDBModalContent>
          </MDBModalDialog>
      </MDBModal>
      </>
      )}
    </div>
  );
 }
