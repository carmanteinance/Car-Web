import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar is-light" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <strong>Bienvenido (nombre_Usuario)</strong>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink className="navbar-item" to="/home" activeClassName="is-active">
          Home
        </NavLink>

        <NavLink className="navbar-item" to="/contact" activeClassName="is-active">
          Contact
        </NavLink>

        <NavLink className="navbar-item" to="/about" activeClassName="is-active">
          About
        </NavLink>

        <NavLink className="navbar-item" to="/profile" activeClassName="is-active">
          Profile
        </NavLink>

        <NavLink className="navbar-item" to="/contacts" activeClassName="is-active">
          Contacts
        </NavLink>
      </div>
    </div>
  </nav>
);

export default NavBar;