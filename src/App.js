import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Home from './components/misc/Home';
import NavBar from './components/misc/NavBar';
//import PrivateRoute from './guards/PrivateRoute';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
            <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;
