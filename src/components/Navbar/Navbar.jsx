import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      

<nav className="navbar navbar-expand-lg Acolor">
  <div className="container-fluid">
    <NavLink className="navbar-brand fs-5 Bcolor" to='/'>Start Right</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 Bcolor">
        <li className="nav-item">
          <NavLink to='/' className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/' className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/' className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/' className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to='/' className={({isActive})=>isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        </li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to='/'>Action</a></li>
            <li><a className="dropdown-item" to='/'>Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to='/'>Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}


      </ul>
      <form className="d-flex" role="search">
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
