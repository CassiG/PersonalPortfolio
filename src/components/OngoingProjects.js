import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AllProjects from './AllProjects';
import ProjectItem from './ProjectItem';

class OngoingProjects extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/ongoing-projects' component={AllProjects} />
        <Route exact path='/work/:project-name' component={ProjectItem} />
      </Switch>
    );
  }
}

export default OngoingProjects;
