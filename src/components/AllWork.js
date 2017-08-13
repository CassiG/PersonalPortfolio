import React, { Component } from 'react';
import WorkAPI from '../work-api'

class AllWork extends Component {
  render() {
    const work =WorkAPI.all().map(work => (
        <li key={work.id.toString()}>
        <p>{work.name}</p>
        <p>{work.description}</p>
        </li>
      ));
    return(
      <div>
        <h1>Work</h1>
        <ul>{work}</ul>
      </div>
    );
  }
}

export default AllWork;
