import React, { Component } from 'react';
import Header from './Header'
// import Main from './Main'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'
import OngoingProjects from './OngoingProjects'
import Contact from './Contact'
import '.././css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageHeader: 'Hello!'
    }
    this.headHandler = this.headHandler.bind(this)

  };

  headHandler(e) {
  if(e === 'CGS') {
    this.setState({
      pageHeader: 'Hello!'
    });
  } else if(e === "Let's Chat!") {
    this.setState({
      pageHeader: 'Contact'
    });
  } else {
    this.setState({
      pageHeader: e
    });
  }
  }

  subHeadHandler(e){
    console.log(e)
  }

  render() {

    return (

      <div className="App">
      <main id="wrap">
      {this.state.headHandler}
        <Header setHeader={this.headHandler} text={this.state.pageHeader}/>
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/work' component={Work} />
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
