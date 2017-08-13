import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '.././css/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="Header-header">
        <div className="Header-logo" alt="logo">
          <Link to ='/'>CGS</Link>
        </div>

            <ul className='Header-nav'>
              <li></li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Header;
