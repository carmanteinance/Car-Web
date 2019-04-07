import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/misc/Navbar/NavBar';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/misc/Home';
import Car from './components/maintenance/Car/Car';
import Profile from './components/auth/Profile';
import Alerts from './components/maintenance/Car/Alerts';

import PrivateRoute from './guards/privateRoutes';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
            <Route exact path="/register-user" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/my-profile" component={Profile} />
            <Route exact path="/my-cars" component={Car} />
            <Route exact path="/alerts" component={Alerts} />

            <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
