import React, { Component } from 'react';
import logo from './logo.svg';
import './Banner.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap'


class Banner extends Component {
  render() {
    return (
      <Jumbotron class="banner">
        <h1>Hello, world!</h1>
        <p>This is a trial into ReactJS, building an API, and keeping them seperate but together!</p>
        <p><Button bsStyle="warning">Tell Me More</Button></p>
      </Jumbotron>
    );
  }
}

export default Banner;
