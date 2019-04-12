import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import authService from '../../../services/AuthService'
import { withAuthConsumer } from '../../../contexts/AuthStore';
import './NavBar.css';


class NavBar extends Component {


  handleLogout = () => {
    authService.logout()
      .then(() => {
        this.props.onUserChanged({})
        this.props.history.push('/login')
      })}

  render(){
    const { user, isAuthenticated } = this.props;
    return(
      <nav className="main-navbar">
      {isAuthenticated() &&
        <Fragment>
          <p><strong>Welcome</strong><NavLink className="nav-link" activeClassName="active" to="/profile"> {user.name}</NavLink></p>
          <div className="navbar-items">
            <a className="nav-link fa fa-home" href="/home"> Home <span className="sr-only">(current)</span></a>
            <a className="nav-link fa fa-user-circle" href="/my-profile"> Profile </a>
            <a className="nav-link fa fa-car" href="/my-cars"> My Cars</a>
            <button className="nav-link fa fa-sign-out-alt button-black" href="/logout" onClick={this.handleLogout}> Logout</button>
          </div>
        </Fragment>
      }
      {!isAuthenticated() &&
        <Fragment>
          <h3>CarCare</h3>
          <div className="menu">
          <a className="nav-link" href="/loging"> Login </a>
          <a className="nav-link" href="/register"> Register</a>
          </div>
        </Fragment>
      }
    </nav>
  )
  }
}

export default withRouter(withAuthConsumer(NavBar));
