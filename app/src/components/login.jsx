import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
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
          <img src={require('../img/img_avatar.png')} alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <div>
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
          <div>
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
            <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
          </div>
          {
          this.state.errorMessage &&
          <div><span>{this.state.errorMessage}</span></div>
        }
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
