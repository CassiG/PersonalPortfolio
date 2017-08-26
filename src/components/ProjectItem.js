import React, { Component } from 'react';
import ProjectAPI from '../project-api'
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    const project = ProjectAPI.get(parseInt(this.props.match.params.id));
    return(
      <div className='project-wrap'>
        <img src={project.img} alt={project.name} />
        <div>
          <h2>{project.name}</h2>
          <p className='short-description'>{project.shortDescription}</p>
          <p>About the Project: {project.longDescription}</p>
          <p>Technology Used: {project.technology}</p>
          <button><a href={project.website} target="_blank">See it Live</a></button>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
