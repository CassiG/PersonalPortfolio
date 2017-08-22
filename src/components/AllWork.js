import React, { Component } from 'react';
import WorkAPI from '../work-api'

class AllWork extends Component {
  render() {
    const work = WorkAPI.all().map(work => (
        <div className='project-wrap'>
          <img src={work.img} alt={work.name} />
          <div>
            <p>{work.name}</p>
            <p>{work.description}</p>
          </div>
        </div>
      ));
    return(
      <div>
        <ul>{work}</ul>
      </div>
    );
  }
}

export default AllWork;
