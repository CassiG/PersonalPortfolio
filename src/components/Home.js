import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this)
  };

  clickHandler(e) {
    this.props.setBodyHeader(e.target.textContent)
  }
  render() {
    return(
      <div>
        <p>I’m a full-stack web developer based out of Seattle, WA. WIth a background in journalism and design I have an editor’s eye that keeps me grounded with clean and concise code, and a design sense that will help me easily visualize the whole picture of any problem I’m trying to solve. </p>
        <Link to='/contact' onClick={this.clickHandler}>Let's Chat</Link>
      </div>
    );
  }
}

export default Home;
