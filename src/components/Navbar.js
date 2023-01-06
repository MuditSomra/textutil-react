import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';
export default function Navbar(props) {


  return (
    // in backticks so that we can use variable in classname
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            <a className="nav-link" href="#">{props.aboutText}</a>

          </li>
        
        </ul>
        <div className="form-check mx-0">
  <input className="form-check" type="radio" name="inlineRadioOptions" id="inlineRadio1" style={{background:'orange'}}  value="warning"/>

</div>
<div className="form-check mx-0">
  <input className="form-check" type="radio" name="inlineRadioOptions" id="inlineRadio2" style={{background:'green'}}  value="success"/>

</div>
<div className="form-check mx-0">
  <input className="form-check" type="radio" name="inlineRadioOptions" id="inlineRadio3" style={{background:'red'}}   value="danger" />
</div>


        <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
  )

}
//Functionname.propTypes
//isRequired also consider default
Navbar.propTypes = {title: PropTypes.string.isRequired,
aboutText: PropTypes.string}
//when noting is send
Navbar.defaultProps={
    title:'Set title here',
    aboutText: 'About text here'
}
