import React, { Component } from 'react';

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
