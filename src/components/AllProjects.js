import React, { Component } from 'react';
import ProjectAPI from '../project-api'

class AllProjects extends Component {
  render() {
    const project = ProjectAPI.all().map(project => (
        <div className='project-home'>
          <img className="portfolio-img-home" src={project.img} alt={project.name} />
          <div className="project-description">
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ));
    return(
      {project}
    );
  }
}

export default AllProjects;
