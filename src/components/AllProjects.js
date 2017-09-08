import React, { Component } from 'react';
import ProjectAPI from '../project-api';
import { Link } from 'react-router-dom';
import { default as Fade } from 'react-fade';

class AllProjects extends Component {
  render() {
    const project = ProjectAPI.all().map(project => (
      <Link to ={'/projects/' + project.id} >
        <li className='all-project-wrap' key={(project.id).toString()}>
          <img src={project.img} alt={project.name} />
          <div className="all-project-description">
            <h2>{project.name}</h2>
            <p className='all-short-description'>{project.shortDescription}</p>
          </div>
        </li>
      </Link>
      ));
    return(
      <Fade duration = {0.5}>

      <ul className="all-project-wrap-group">
      {project}
      </ul>
      </Fade>
    );
  }
}

export default AllProjects;
