import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import '.././css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="App-logo" alt="logo">CGS</div>

            <ul className='App-nav'>
              <li>About</li>
              <li>Work</li>
              <li>Ongoing Projects</li>
              <li>About Me</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
