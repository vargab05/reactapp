import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const HandleRedClick = () =>{
    props.changeNavbarColor('red');
  }
  const HandleGreenClick = () =>{
    props.changeNavbarColor('Green');
  }
  const HandlePurpleClick = () =>{
    props.changeNavbarColor('Purple');
  }
  const HandleBlueClick = () =>{
    props.changeNavbarColor('Blue');
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.element1}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Market Place</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
            <button onClick={HandleRedClick} className="btn btn-red p-3 mx-1 rounded-circle" style={{backgroundColor:"red"}}></button>
            <button onClick={HandleGreenClick} className="btn btn-green p-3 mx-1 rounded-circle" style={{backgroundColor:"green"}}></button>
            <button onClick={HandlePurpleClick} className="btn btn-purple p-3 mx-1 rounded-circle" style={{backgroundColor:"purple"}}></button>
            <button onClick={HandleBlueClick} className="btn btn-blue p-3 mx-1 rounded-circle" style={{backgroundColor:"blue"}}></button>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Dark Mode":"Light Mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
