import React, { Component } from 'react';
import Header from './Header'
// import Main from './Main'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import OngoingProjects from './OngoingProjects'
import Contact from './Contact'
import '.././css/App.css';

class App extends Component {
  render() {

    return (

      <div className="App">
      <main id="wrap">
        <Header/>

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
      </main>
      </div>
    );
  }
}

export default App;
