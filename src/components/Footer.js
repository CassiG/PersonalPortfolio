import React, { Component } from 'react'
import '.././css/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        &#169; Cassi Gallagher-Shearer {new Date().getFullYear()} | Built with React. 
      </div>
    );
  }
}

export default Footer;
