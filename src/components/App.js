import React, { Component } from 'react';
import Header from './Header'
import '.././css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }
  render() {
    return (
      <div className="Home">
        <Header
        title={this.state.title}
        />
        <p className="Home-intro">

        </p>
        <button>Let's Chat!</button>
      </div>
    );
  }
}

export default Home;
