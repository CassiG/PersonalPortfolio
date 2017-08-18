import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '.././css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageHeader: 'Hello!'
    }
    this.mainHeadHandler = this.mainHeadHandler.bind(this)
    this.subHeadHandler = this.subHeadHandler.bind(this)

  };

  mainHeadHandler(e) {
    console.log(e)
  // if(e === 'CGS') {
  //   this.setState({
  //     pageHeader: 'Hello!'
  //   });
  // } else if(e === "Let's Chat!") {
  //   this.setState({
  //     pageHeader: 'Contact'
  //   });
  // } else {
  //   this.setState({
  //     pageHeader: e
  //   });
  // }
  }

  subHeadHandler(e){
    console.log(e)
  }

  render() {

    return (
      <div className="App">
      {this.state.subHeadHandler}
        <Header setHeader={this.mainHeadHandler} text={this.state.pageHeader}/>
        <Main setBodyHeader={this.subHeadHandler} />
        <Footer />
      </div>
    );
  }
}

export default App;
