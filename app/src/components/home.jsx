import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    <h1>Home</h1>
    <div className="container">
      <div className="imgcontainer">
        <img src={require('../img/img_avatar.png')} alt="Avatar" className="avatar" />
      </div>
      <h3 align="center">Welcome {props.user.firstName} {props.user.lastName}</h3>
    </div>
  </div>
);

Home.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default Home;
