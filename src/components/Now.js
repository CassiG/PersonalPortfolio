import React, { Component } from 'react';
import { default as Fade } from 'react-fade';

class About extends Component {
  render() {
    return(
      <Fade duration = {0.5}>

      <div>

        <h1>What am I up to now?</h1>
        <p>Last Updated: July 2018</p>
        <h2>Projects in Development</h2>
          <p><strong>Jeff Shearer Consulting</strong>: A custom-built Wordpress site focusing on consulting for <a href="https://www.jeffrshearer.com/">jeffrshearer.com</a></p>

          <h2>Other Fun Things</h2>

          <div className="container">
            <div className="row">
              <div className="col-auto"><i className="fa fa-laptop" aria-hidden="true"></i></div>
              <div className="col">Developing at <a href="https://www.slalom.com/" target = 'blank_'>Slalom Consulting</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-hands-helping" aria-hidden="true"></i></div>
              <div className="col">Helping solve non-profit solutions with tech over at <a href="https://www.theworldisfun.org/" target="blank_" rel="noopener noreferrer">The World is Fun</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
              <div className="col">Honing in on all things Front-end at <a href="https://frontendmasters.com/" target="blank_" rel="noopener noreferrer">Front End Masters</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-gamepad" aria-hidden="true"></i></div>
              <div className="col">Playing through the beautiful <a href="https://www.orithegame.com/" target="blank_" rel="noopener noreferrer">Ori and the Blind Forest</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-heartbeat" aria-hidden="true"></i></div>
              <div className="col">Rediscovering the joy (?) of running with my local <a href="https://www.meetup.com/FBCB-RUNCLUB/" target="blank_" rel="noopener noreferrer">brewery run club</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-heart" aria-hidden="true"></i></div>
              <div className="col">Making sure I keep my pup's <a href="https://www.instagram.com/leianotorgana/" target='blank_'>social media klout</a> score high</div>
            </div>
          </div>

      </div>
      </Fade>
    );
  }
}

export default About;
