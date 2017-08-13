import React, { Component } from 'react';
import Header from './Header'
import '.././css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }
  render() {
    return (
      <div className="App">
        <Header
        title={this.state.title}
        />
        <p className="App-intro">

        </p>
        <button>Let's Chat!</button>
      </div>
    );
  }
}

export default App;
