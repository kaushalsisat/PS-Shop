import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border border-secondary p-3 shadow">
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold text-dark" to="#"><img src={logo} alt="Logo" className="navbar-logo"/>
    -SHOP</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor04">
<ul className="navbar-nav mx-auto">
  <li className="nav-item">
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
      to="/"
    >
      Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
      to="/shop"
    >
      Shop
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
      to="/about"
    >
      About
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? 'fw-bold active' : ''}`}
      to="/contact"
    >
      Contact
    </NavLink>
  </li>
</ul>

      <form className="d-flex">
      <Link to="/login" className="btn btn-success my-1 my-sm-0"> Login </Link>
      <Link to="/register" className="btn btn-danger my-1 my-sm-0"> Register </Link>
      </form>
     {/* cart Links */}
      <ul className='navbar-nav ms-auto'> 
         <li className="nav-item">
          <NavLink className="nav-link fw-bold fs-3" to='/cart'>ADD<i class="bi bi-cart4"></i></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
