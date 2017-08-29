import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '.././css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisable: false
    };
  };

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  };

  componentWillUnmout() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  navigationLinks() {
    return [
      <ul className='Header-nav'>
        <li key={1}><Link to = '/about'>About</Link></li>
        <li key={2}><Link to = '/projects'>Projects</Link></li>
        <li key={3}><Link to='/contact'>Contact</Link></li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisable){
      return this.navigationLinks();
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 1080) {
      return [
        <div className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}>
            Menu
          </p>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={7} className='nav-menu'>
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisable) {
      this.setState({mobileNavVisable: true});
    } else {
      this.setState({mobileNavVisable: false});
    }
  }

  render() {

    return (
      <div>
        <div className="Header">
        <div className="Header-logo" alt="logo">
          <Link to ='/'>CGS</Link>
        </div>
          {this.renderNavigation()}
        </div>
      </div>
    )
  }
}

export default Header;
