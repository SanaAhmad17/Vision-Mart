import React, { useState } from 'react'
import './../App.css'
import Colors from '../res/colors'
import { MDBBtn, MDBModal, MDBModalContent, MDBModalDialog } from 'mdb-react-ui-kit'
import Login from '../firebase/login'
export default function NavBar() {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-success ">
  <div className="container-fluid  " >
    <a className="navbar-brand" href="#" style={{color:Colors.color4, fontFamily: "'Orbitron',sans-serif",fontSize:'30px',textShadow:' 0 0 3px #FFFF00,1px 1px 2px black',textDecoration:' underline #3CB371 double 1px ' }}><i className="fa-solid fa-dragon" style={{color:Colors.color3}}></i>Vision-Mart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{justifyContent:'center'}}>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:Colors.color4}} >
            Location <i className="fa-solid fa-location-dot"></i>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li> 
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex " role="search">
      <div className="input-group" >
        <input className="form-control " type="search" placeholder="Search Vision-Mart" aria-label="Search"  />
        <button className="btn btn-warning" type="submit"><i className="fa-solid fa-magnifying-glass fa-sm"></i></button>
        </div>
      </form>
      <button className="btn m-2" type="submit" style={{borderWidth: '3px',
    borderBottom: '3px solid #B22222',
    borderLeft: '3px solid #40E0D0',
    borderRight: '3px solid #1E90FF',
    borderTop: '3px solid #F08080',
    borderRadius: '30px',
    color:Colors.color4
    }}><i className="fa-solid fa-plus"></i> Sell</button>
     
   <Login/>
      
      </div>
  </div>
</nav>
<ul className="nav nav-md " style={{boxShadow:' 0 3px 5px rgba(0, 0, 0, 0.13)',fontSize:'14px',fontWeight:'550'}}>
<li className="nav-item dropdown ms-md-5 ms-1">
    <a className="nav-link link-success dropdown-toggle px-md-3 px-1" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">All</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2" href="#">Mobile Phones</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2" href="#">Cars</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2" href="#">Motorcycles</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2" href="#">Houses</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2" href="#">TV-Video-Audio</a>
  </li>
  <li className="nav-item ">
    <a className="nav-link link-success px-md-3 px-2" href="#">Tablets</a>
  </li>
  <li className="nav-item">
    <a className="nav-link link-success px-md-3 px-2 " href="#">Land & Plots</a>
  </li>
</ul>
</div>
  )
}
