import React, { Component } from 'react';
import ProjectAPI from '../project-api';
import { Link } from 'react-router-dom';

class AllProjects extends Component {
  render() {
    const project = ProjectAPI.all().map(project => (
      <Link to ={'/ongoing-projects/' + project.id} >
        <div key={project.id}>
          <img src={project.img} alt={project.name} />
          <div className="all-project-description">
            <h2>{project.name}</h2>
            <p className='all-short-description'>{project.shortDescription}</p>
          </div>
        </div>
      </Link>
      ));
    return(
      <div className='all-project-wrap'>
      {project}
      </div>
    );
  }
}

export default AllProjects;
