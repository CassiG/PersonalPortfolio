import React, { Component } from 'react';
import ProjectAPI from '../project-api';
import { Link } from 'react-router-dom';

class AllProjects extends Component {
  render() {
    const project = ProjectAPI.all().map(project => (
      <div className='project-wrap' key={project.id}>
        <img src={project.img} alt={project.name} />
        <div>
          <Link to ={'/ongoing-projects/' + project.id} ><h2>{project.name}</h2></Link>
          <p className='short-description'>{project.shortDescription}</p>
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
