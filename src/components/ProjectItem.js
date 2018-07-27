import React, { Component } from 'react';
import ProjectAPI from '../project-api'

class ProjectItem extends Component {
  render() {
    const project = ProjectAPI.get(parseInt(this.props.match.params.id, 10));
    return(
      <div className='project-wrap'>
        <img src={project.img} alt={project.name} />
        <div>
          <h2>{project.name}</h2>
          <p className='short-description'>{project.shortDescription}</p>
          <p>About the Project: {project.longDescription}</p>
          <p>Front-End Technology Used: {project.frontEnd}</p>
          <p>Back-End Technology Used: {project.backEnd}</p>
          <a href={project.website} target="_blank" rel="noopener noreferrer"><button>View Live</button></a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"><button>See Source</button></a>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
