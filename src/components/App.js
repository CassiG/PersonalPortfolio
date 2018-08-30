import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Now from './Now'
import Projects from './Projects'
import Contact from './Contact'
import BlogRoute from './Blog/BlogRoute'
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
              <Route path='/projects' component={Projects}
              />
              <Route exact path='/now' component={Now} />
              <Route exact path='/contact' component={Contact} />
              <Route path='/blog' component={BlogRoute} />
            </Switch>

          <Footer />
        </Fade>
      </main>
      </div>
    );
  }
}

export default App;
