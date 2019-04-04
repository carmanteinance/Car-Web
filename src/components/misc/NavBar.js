import React, { Component } from 'react';

class NavBar extends Component {

  render(){
    return(
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand text-white"> Welcome "User"</a>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav pl-5">
        <li className="nav-item active">
          <a className="nav-link fa fa-user-circle" href="/profile"> Profile <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active ml-2">
          <a className="nav-link fa fa-car" href="/my-cars"> My Cars</a>
        </li>
        <li className="nav-item active ml-2">
          <a className="nav-link fa fa-sign-out-alt" href="/logout"> Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  )
  }
}

export default NavBar;
