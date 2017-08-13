import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AllWork from './AllWork';
import WorkItem from './WorkItem';

class Work extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/work' component={AllWork} />
        <Route exact path='/work/:work-name' component={WorkItem} />
      </Switch>
    );
  }
}

export default Work;
