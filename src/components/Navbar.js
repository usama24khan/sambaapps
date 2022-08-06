import React from 'react' 
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   
<nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NAVBAR</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.menue}</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/action">Action</Link></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href='/' className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn text-${props.text} btn-outline-${props.text}`} type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
  <input onClick={props.togglechange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckDefault">change Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
// Navbar.propTypes = {title:PropTypes.string, 
//                     menue:PropTypes.string};
//    Navbar.defaultProps = {      
//     title: 'Stranger',
//     menue: 'Home'
//      };