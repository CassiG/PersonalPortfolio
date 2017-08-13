import React, { Component } from 'react';
import ProjectAPI from '../project-api'

class AllProjects extends Component {
  render() {
    const project =ProjectAPI.all().map(project => (
        <li key={project.id.toString()}>
        <p>{project.name}</p>
        <p>{project.description}</p>
        </li>
      ));
    return(
      <div>
        <h1>Ongoing Projects</h1>
        <ul>{project}</ul>
      </div>
    );
  }
}

export default AllProjects;
