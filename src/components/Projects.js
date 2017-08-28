import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AllProjects from './AllProjects';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/projects' component={AllProjects} />
        <Route exact path='/projects/:id' component={ProjectItem} />
      </Switch>
    );
  }
}

export default Projects;
