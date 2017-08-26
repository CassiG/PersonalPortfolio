import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '.././css/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this)
  };

  clickHandler(e) {
    this.props.setHeader(e.target.href)
  }

  render() {

    return (
      <div>
        <div className="Header">
        <div className="Header-logo" alt="logo">
          <Link to ='/' onClick={this.clickHandler}>CGS</Link>
        </div>
          <nav id="nav">
            <ul className='Header-nav'>
              <li><Link to = '/about' onClick={this.clickHandler}>About</Link></li>
              <li><Link to = '/ongoing-projects' onClick={this.clickHandler}>Ongoing Projects</Link></li>
              <li><Link to='/contact' onClick={this.clickHandler}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
