import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import OngoingProjects from './OngoingProjects'
import Contact from './Contact'
import '.././css/App.css';
import { default as Fade } from 'react-fade';

class App extends Component {
  render() {

    return (

      <div className="App">
      <Header/>

      <main id="wrap">
          <Fade duration = {0.5}>
            <Switch >
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route
                path='/ongoing-projects'
                component={OngoingProjects}
              />
              <Route exact path='/contact' component={Contact} />
            </Switch>

          <Footer />
        </Fade>
      </main>
      </div>
    );
  }
}

export default App;
