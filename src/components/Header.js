import React, { Component } from 'react'
import '.././css/Header.css';

class Header extends Component {
  render() {
    const navItems = ['Contact', 'Blog', 'Ongoing Projects', 'Work', 'About'];
    const nav = navItems.map ((navItem) =>
      <li key={navItem.id}>{navItem}</li>
  );
    return (
      <div>
        <div className="Header-header">
        <div className="Header-logo" alt="logo">CGS</div>

            <ul className='Header-nav'>
            {nav}
            </ul>
          </div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;
