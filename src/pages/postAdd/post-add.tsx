import React from 'react'
import Colors from '../../res/colors'
import './post-add.css'
import { MDBBtn, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit'
export default function PostAdd() {
  return (
    <div>
         <nav className="navbar navbar-expand-sm bg-success ">
  <div className="container-fluid  " >
    <a className="navbar-brand" href="#" style={{color:Colors.color4, fontFamily: "'Orbitron',sans-serif",fontSize:'30px',textShadow:' 0 0 3px #FFFF00,1px 1px 2px black',textDecoration:' underline #3CB371 double 1px ' }}><i className="fa-solid fa-dragon" style={{color:Colors.color3}}></i>Vision-Mart</a>
    </div>
    </nav>
    <h4 className='d-flex justify-content-center my-3'>Post Your Add</h4>
    <div className="container">
    <div className='ctable'>
        <h5 className='ccategory'>Choose a Category</h5>
        <MDBRow>
        <MDBCol size='md'>
        <MDBDropdown className='cdrop' dropright group>
        <MDBBtn  color='light' className='cdropB'>Mobiles</MDBBtn>
        <MDBDropdownToggle  color='light'/>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown className='cdrop' dropright group>
        <MDBBtn  color='light' className='cdropB'>Mobiles</MDBBtn>
        <MDBDropdownToggle  color='light'/>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem link>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
      </MDBRow>
        </div>
    </div>
    </div>
  )
}
