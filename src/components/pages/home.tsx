import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
import { signOut } from 'firebase/auth';
import HandleAuth from './logout';
export default function HomePage() {

 
  
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-light">
<div className="container-fluid">
  {HandleAuth()}
</div>

</nav>
    </div>
  )
}
