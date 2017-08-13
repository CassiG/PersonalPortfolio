import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import OngoingProjects from './OngoingProjects'
import Contact from './Contact'
import '.././css/Main.css';

class Main extends Component {
  render(){
    return(
      <main id="wrap">
        <Switch>
          <div id="content">
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/work' component={Work} />
            <Route exact path='/ongoing-projects' component={OngoingProjects} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </Switch>
      </main>
    );
  }
}

export default Main;
