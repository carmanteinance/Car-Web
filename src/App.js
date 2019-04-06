import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/misc/Navbar/NavBar';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/misc/Home';
import Car from './components/otros/Car';


import Profile from './components/auth/Profile';
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
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/car-list" component={Car} />
            <Redirect to="/login"/>
        </Switch>
      </div>
    );
  }
}

export default App;
