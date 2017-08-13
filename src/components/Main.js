import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import '.././css/Main.css';

class Main extends Component {
  render(){
    return(
      <main id="wrap">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
