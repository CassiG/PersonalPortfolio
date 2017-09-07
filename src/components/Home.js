import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div className='home-style'>
        <h1>Hey there, I'm Cassi!</h1>
        <p>I’m a full-stack web developer based out of Seattle, WA. With an additional background in journalism and design I have an editor’s eye that keeps me grounded with clean and concise code, and a design sense that will help me easily visualize the whole picture of any problem I’m trying to solve. </p>
        <Link to='/contact'>Let's chat</Link>
      </div>
    );
  }
}

export default Home;
