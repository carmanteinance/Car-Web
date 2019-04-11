import React, { Component } from "react";
import authService from "../../services/AuthService";
import { withAuthConsumer } from "../../contexts/AuthStore.js";

// eslint-disable-next-line no-useless-escape
const PASSWORD_PATTERN = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const validations = {password: (value) => {
  let message;
  if (!value) {
    message = 'Password is required';
  }else if (!PASSWORD_PATTERN.test(value)) {
    message = 'The password must contain at least 6 characters, 1 lowercase, 1 uppercase and one number';
  }
  return message;
},
};

class Profile extends Component {
  state = {
    user: {
      name: "",
      password: ""
    },
    errors: {
      password: validations.password()
    },
    touch: {}
  };

  handleChange = event => {
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
    });
  };

  handleBlur = event => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.isValid()) {
      authService.updateProfile(this.state.user).then(
        user => this.setState({ user: { ...this.state.user, ...user } }),
        error => {
          const { message, errors } = error.response.data;
          this.setState({
            errors: {
              ...this.state.errors,
              ...errors,
              name: !errors && message
            }
          });
        }
      );
    }
  };

  isValid = () => {
    return !Object.keys(this.state.user).some(attr => this.state.errors[attr]);
  };

  handleLogout = () => {
    authService.logout().then(() => this.props.onUserChange(null));
  };

  componentDidMount() {
    authService
      .getProfile()
      .then(
        user => this.setState({ user: { ...this.state.user, ...user } }),
        error => console.error(error)
      );
  }

  render() {
    const { errors, user, touch } = this.state;

    return (
      <div className="box mx-5">
        <div className="row">
          <div className="col-6 mt-3">
            <h3>Profile</h3>
            <form
              id="profile-form"
              className="mt-4"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={user.email}
                  disabled
                />
              </div>
              <div className="form-group">
                <label> User Name</label>
                <input
                  type="name"
                  name="name"
                  className={`form-control ${
                    touch.name && errors.name ? "is-invalid" : ""
                  }`}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={user.name}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    touch.password && errors.password ? "is-invalid" : ""
                  }`}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  value={user.password}
                />
                <div className="invalid-feedback">{errors.password}</div>
              </div>
            </form>
            <button
              className="btn btn-success"
              form="profile-form"
              type="submit"
              disabled={!this.isValid()}
            >
              Update profile
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthConsumer(Profile);
