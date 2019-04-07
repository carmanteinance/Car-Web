import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render(){
    return(
    <nav className="main-navbar">
      <a> Welcome "User"</a>  
      <div className="navbar-items">
        <a className="nav-link fa fa-home" href="/home"> Home <span className="sr-only">(current)</span></a>
        <a className="nav-link fa fa-user-circle" href="/my-profile"> Profile </a>
        <a className="nav-link fa fa-car" href="/my-cars"> My Cars</a>
        <a className="nav-link fa fa-sign-out-alt" href="/logout"> Logout</a>
      </div>
    </nav>
  )
  }
}

export default NavBar;
