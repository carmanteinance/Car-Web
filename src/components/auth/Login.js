import React, { Component } from 'react'
import authService from '../../services/AuthService';
import { Redirect, Link } from 'react-router-dom';
//import { withAuthConsumer } from '../../contexts/AuthStore'



const validations = {
  email: (value) => {
    let message;
    if (!value) {
      message = 'Email or Password invalid';
      }
    return message;
  },
  password: (value) => {
    let message;
    if (!value === '') {
      message = 'Email or Password invalid';
    }
      return message;
  }
}


class Login extends Component {

  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {
      email: validations.email(),
      password: validations.password(),
    },
    touch: {},
    isAuthenticated: false
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
    console.log ("Entra?")
    if (this.isValid()) {
      console.log ("Entra aqui")
      authService.authenticate(this.state.user)
        .then(
          (user) => {
            this.setState({ isAuthenticated: true }, 
              // () => {
              // this.props.onUserChange(user);}
              )
          },
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...this.state.errors,
                ...errors,
                password: !errors && message
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

    const { isAuthenticated, errors, user, touch } =  this.state;
    
    if (isAuthenticated) {
      return (<Redirect to="/my-profile" />)
    }

    return (
      <div className="box mx-5">
        <div className="row">
          <div className="col-6 mt-5">
            <div className="text-center">
              <h3>LOG IN</h3>
            </div >
            <form id="register-form" className="mx-5" onSubmit={this.handleSubmit}>
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
            <button className="btn btn-success" form="login-form" type="submit" disabled={!this.isValid()}> Login </button>
            <p className="mt-4"><small>Don't have an account yet?!  You can create your account <Link to="/register-user">here</Link></small></p>
            </form>
          </div>
          <div className="col-6 mt-5">
            <h2>HELLO!!</h2>
            <p className="lead mt-4 mb-2">CarCare is an application that will help you keep track of your car's maintenance</p>
            <p className="mt-2"><small>If you want to have an account, click below </small></p>
            <Link className="btn btn-primary" to="/register-user"> <i className="fa fa-hand-point-right mr-2"/>  I want an ACCOUNT</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;