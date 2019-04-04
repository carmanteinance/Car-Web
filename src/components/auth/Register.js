import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'

const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
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
    }
    return message;
  },
}

export default class Register extends Component {
  state = {
    user: {
      usermame: '',
      email: '',
      password: '',
    },
    errors: {},
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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.isValid()) {
  //     authService.register(this.state.user)
  //       .then(
  //         (user) => this.setState({ isRegistered: true }),
  //         (error) => {
  //           const { message, errors } = error.response.data;
  //           this.setState({
  //             errors: {
  //               ...this.state.errors,
  //               ...errors,
  //               email: !errors && message
  //             }
  //           })
  //         }
  //       )
  //   }
  // }

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
                <label className="fa fa-user mt-5">  User Name </label>
                {/* <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend2">@</span>
                </div> */}
                <input type="user-name" name="user-name" className={`form-control ${touch.username? 'is-invalid' : ''}`} onChange={this.handleChange} onBlur={this.handleBlur} value={user.username} />
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
          <div className="col-6 pt-5 mt-5">
            <h3>Hello!!</h3>
            <p className="lead mb-3">Welcome to IronProfile!</p>
            <p className="mb-1"><small>Wait I have already an account</small></p>
            <button className="btn btn-primary far fa-hand-point-right" href="/login" > Go To LOGIN </button>
          </div>
        </div>
      </div>
    );
  }
}