import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '.././css/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header">
        <div className="Header-logo" alt="logo">
          <Link to ='/'>CGS</Link>
        </div>
          <nav id="nav">
            <ul className='Header-nav'>
              <li><Link to = '/contact'>Contact</Link></li>
              <li><Link to = '/ongoing-projects'>Ongoing Projects</Link></li>
              <li><Link to = '/work'>Work</Link></li>
              <li><Link to = '/about'>About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
