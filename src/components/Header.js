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
      <ul className='Header-nav' key={1}>
        <li key={2}><Link to = '/about' onClick={this.handleInnerNavClick.bind(this)}>About</Link></li>
        <li key={3}><Link to = '/projects' onClick={this.handleInnerNavClick.bind(this)}>Projects</Link></li>
        <li key={4}><Link to = '/now' onClick={this.handleInnerNavClick.bind(this)}>Now</Link></li>
        <li key={5}><Link to='/contact' onClick={this.handleInnerNavClick.bind(this)}>Contact</Link></li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisable){
      return this.navigationLinks();
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 900) {
      return [
        <div className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}>
          <i className="fa fa-bars" aria-hidden="true"></i>

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

  handleInnerNavClick() {
    this.setState({mobileNavVisable: false});
  }

  render() {

    return (
      <div>
        <div className="Header">
        <div className="Header-logo" alt="logo">
          <Link to ='/' onClick={this.handleInnerNavClick.bind(this)}>CGS</Link>
        </div>
        <div className='right-header'>
            <div className="social-icons">
              <a href="https://github.com/CassiG" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>

              <a href="https://www.linkedin.com/in/cassigallagher/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a href="https://twitter.com/cassigallagher" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
            {this.renderNavigation()}

          </div>
        </div>
      </div>
    )
  }
}

export default Header;
