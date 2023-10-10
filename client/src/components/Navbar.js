import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand"  href="/#">PlacementPrep</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href ="/Learn">Learn</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Explore">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">AboutUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">ContactUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signup">Register</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar