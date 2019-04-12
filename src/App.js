import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/misc/Navbar/NavBar';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/misc/Home';
import CarList from './components/maintenance/Car/CarList';
import CarForm from './components/maintenance/Car/CarForm';
import Profile from './components/auth/Profile';
import Alerts from './components/maintenance/Car/Alerts';
import Maintenance from './components/maintenance/Maintenance/Maintenance';
import Talleres from './components/maintenance/Car/Talleres'

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

            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/my-profile" component={Profile} />
            <PrivateRoute exact path="/my-cars" component={CarList} />
            <PrivateRoute exact path="/my-cars/newCar" component={CarForm}/>
            <PrivateRoute exact path="/alerts" component={Alerts} />

            <PrivateRoute exact path="/maintenance" component={Maintenance} />
            <PrivateRoute exact path="/talleres" component={Talleres} />

            <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
