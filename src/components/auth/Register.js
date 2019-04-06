import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import authService from '../../services/AuthService'

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Name is required';
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'Invalid email pattern';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'Password is required';
    }else if (!PASSWORD_PATTERN.test(value)) {
      message = 'The password must contain at least 6 characters, 1 lowercase, 1 uppercase and one number';
    }
    return message;
  },
}

export default class Register extends Component {
  state = {
    user: {
      name: '',
      email: '',
      password: '',
    },
    errors: {
      name: validations.name(),
      email: validations.email(),
      password: validations.password(),
    },
    touch: {},
    isRegistered: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      authService.register(this.state.user)
        .then(
          (user) => this.setState({ isRegistered: true }),
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                email: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { isRegistered, errors, user, touch } =  this.state;
    if (isRegistered) {
      return (<Redirect to="/login" />)
    }

    return (
      <div className="box mt-5">
        <div className="row">
          <div className="col-6">
            <div className=" text-center">
              <h3>JOIN US</h3>
            </div >
            <form id="register-form" className="mx-5" onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label className="fa fa-user">  Name</label>
                <input type="name" name="name" className={`form-control ${touch.name && errors.name ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.name} />
                <div className="invalid-feedback">{ errors.name }</div>
              </div>
              <div className="form-group">
                <label className="fa fa-at">  Email</label>
                <input type="email" name="email" className={`form-control ${touch.email && errors.email ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.email} />
                <div className="invalid-feedback">{ errors.email }</div>
              </div>
              <div className="form-group">
                <label className="fa fa-key">  Password</label>
                <input type="password" name="password" className={`form-control ${touch.password && errors.password ? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.password} />
                <div className="invalid-feedback">{ errors.password }</div>
              </div>
            </form>
        <button className="btn btn-success mx-5 mt-2" form="register-form" type="submit" disabled={!this.isValid()}> Yes, I want to join!</button>
       </div>
        <div className="col-6 pt-5">
           <h3>WELCOME!!</h3>
            <p className="lead mt-4 mb-2">CarCare is an application that will help you keep track of your car's maintenance.</p>
            <p className="mt-2"><small>Wait, I have already an account</small></p>
            <Link className="btn btn-info" to="/login"> <i className="fa fa-hand-point-right mr-2"/>  Go To LOG IN</Link>
          </div>
        </div>
      </div>
    );
  }
}