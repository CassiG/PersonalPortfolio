import React, { Component } from 'react';
import ProjectAPI from '../project-api'

class ProjectItem extends Component {
  render() {
    const project = ProjectAPI.get(parseInt(this.props.match.params.id));
    return(
      <div>
      {project.name}
      </div>
    );
  }
}

export default ProjectItem;
