import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FormErrors } from './errors';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      formErrors: { email: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState(
      { [name]: value },
      () => { this.validateField(name, value); },
    );
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid; // eslint-disable-line prefer-destructuring
    let passwordValid = this.state.passwordValid; // eslint-disable-line prefer-destructuring

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  handleLogin() {
    axios.post('http://127.0.0.1:3000/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        this.props.onLogin(response.data);
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ errorMessage: error.response.data.message });
      });
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <div className="imgcontainer">
          <img src={require('../img/img_avatar.png')} alt="Avatar" className="avatar" /> {/* eslint-disable-line global-require */}
        </div>
        <div className="container">
          <div className={`form-group ${this.state.formErrors.email}`}>
            <label htmlFor="email">
            Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className={`form-group ${this.state.formErrors.password}`}>
            <label htmlFor="password">
            Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div>
            <button onClick={this.handleLogin} disabled={!this.state.formValid}>Login</button> or <Link to="/sign-up">Sign Up</Link>
          </div>
          <FormErrors formErrors={this.state.formErrors} />
          {this.state.errorMessage && <div><span>{this.state.errorMessage}</span></div>}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
