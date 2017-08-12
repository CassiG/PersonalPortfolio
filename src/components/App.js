import React, { Component } from 'react';
import Header from './Header'
import '.././css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello</h1>
        <p className="App-intro">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula interdum, finibus ipsum quis, tincidunt massa. Cras dignissim ac erat vel eleifend. Sed euismod nisl ut ex tincidunt aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ante eros, ultrices a facilisis consequat, convallis et metus. Cras dapibus ipsum ipsum, non maximus mi eleifend sed. Morbi commodo finibus cursus. Praesent suscipit, sapien at mattis cursus, justo ante eleifend lacus, sit amet auctor purus tellus elementum justo. Etiam euismod auctor magna quis vehicula.
        </p>
        <button>Let's Chat!</button>
      </div>
    );
  }
}

export default App;
