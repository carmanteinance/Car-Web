import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/misc/NavBar'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//import Profile from './components/auth/Profile';
import Home from './components/misc/Home';
//import PrivateRoute from './guards/PrivateRoute';

import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'antd-mobile/dist/antd-mobile.css';

import './App.css';




class App extends Component {
  render() {
    return (

    <div className="App">
      <NavBar/>

      <section className="section">
        <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
              <Redirect to="/"/>
          </Switch>
        </div>
      </section>
    </div>
    );
  }
}

export default App;
