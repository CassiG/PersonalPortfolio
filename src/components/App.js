import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '.././css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo" alt="logo">CGS</div>
          <nav>Welcome to React</nav>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
