import React, { Component } from 'react';

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
