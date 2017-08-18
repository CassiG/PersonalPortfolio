import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '.././css/Header.css';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      pageHeader: 'Hello!'
    }
    this.clickHandler = this.clickHandler.bind(this)
  };

clickHandler(e){
  if(e.target.textContent !== 'CGS') {
    this.setState({
      pageHeader: e.target.textContent
    });
  } else {
    this.setState({
      pageHeader: 'Hello!'
    });
  }
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
              <li><Link to='/contact' onClick={this.clickHandler}>Contact</Link></li>
              <li><Link to = '/ongoing-projects' onClick={this.clickHandler}>Ongoing Projects</Link></li>
              <li><Link to = '/work' onClick={this.clickHandler}>Work</Link></li>
              <li><Link to = '/about' onClick={this.clickHandler}>About</Link></li>
            </ul>
          </nav>
        </div>
        <h1>{this.state.pageHeader}</h1>
      </div>
    )
  }
}

export default Header;
