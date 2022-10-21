import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light " style={{backgroundColor:"#193869"}}>
  <div className="container-fluid " >
  {/* style={{marginLeft:"10px", fontWeight:"bold", textColor:"#d9d4c7"}} */}
    <a className="navbar-brand " href="/" >
      <img src='IMST_LOGO.png' width="70" height="60" alt='logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-2" >
        <li className="nav-item nav-link"  >
            <Link to="/About" className='about_color'>ABOUT</Link>
        </li>

        <li className="nav-item nav-link">
        <Link to="/Courses" className='about_color'>COURSES</Link>
        </li>



        <li className="nav-item nav-link">
        <Link to="/PLACEMENT" className='about_color'>PLACEMENTS</Link>
        </li>

        <li className="nav-item nav-link">
        <Link to="/Gallary" className='about_color' >GALLARY</Link>
        </li>

        <li className="nav-item nav-link">
        <Link to="/Events" className='about_color' >EVENTS</Link>
        </li>

        <li className="nav-item nav-link">
        <Link to="/Contact" className='about_color' >CONTACT US</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar