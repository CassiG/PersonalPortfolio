import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import OngoingProjects from './OngoingProjects'
import Contact from './Contact'

class Main extends Component {
  render(){
    return(
      <main id="wrap">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/ongoing-projects' component={OngoingProjects} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default Main;
