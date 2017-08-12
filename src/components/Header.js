import React, { Component } from 'react'
import '.././css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
      <div className="App-logo" alt="logo">CGS</div>

          <ul className='App-nav'>
            <li>About</li>
            <li>Work</li>
            <li>Ongoing Projects</li>
            <li>About Me</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
    )
  }
}

export default Header;
