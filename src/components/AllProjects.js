import React, { Component } from 'react';
import ProjectAPI from '../project-api'

class AllProjects extends Component {
  render() {
    const project = ProjectAPI.all().map(project => (
        <div className='project-wrap'>
          <img src={project.img} alt={project.name} />
          <div>
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ));
    return(
      <div>
      {project}
      </div>
    );
  }
}

export default AllProjects;
