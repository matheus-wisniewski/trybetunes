import React, { Component } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <main className="footer-component__contact">
        <label htmlFor="github contact">
          {' '}
          <a href="https://github.com/matheus-wisniewski" className="footer--component__GH">
            <BsGithub />
            {' '}
            /matheus-wisniewski
          </a>
        </label>

        <label htmlFor="linkedin contact">
          {' '}
          <a href="https://www.linkedin.com/in/matheus-wisniewski/" className="footer--component__IN">
            <BsLinkedin />
            {' '}
            /in/matheus-wisniewski
          </a>
        </label>
        <p style={ { color: 'white' } }>
          © 2023 Trybe
        </p>
      </main>
    );
  }
}

export default Footer;
