import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

  let myStyle = {
    btnName: props.mode === "dark" ? "Light Mode" : "Dark Mode",
    dataBsTheme: props.mode === "dark" ? "dark" : "",
    theme: {
      backgroundColor: props.mode === "dark" ? "#171717" : "white",
      color: props.mode === "dark" ? "white" : "black"
    }
  }

  return (

    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme={myStyle.dataBsTheme}>
    
      <div className="container-fluid">

        <h5 className="navbar-brand">{props.title}</h5>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Help and Support</Link></li>
                <li><Link className="dropdown-item" to="/">More from TextUtils</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">New Updates!</Link></li>
              </ul>
            </li>

          </ul>

          <div className="form-check form-switch mx-5 my-3 col-1 rounded-2" style={props.mode === "dark" ? {color: "white"} : {color: "black"}}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleStyle} aria-checked />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{myStyle.btnName}</label>
          </div>

        </div>
      </div>
  </nav>

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
