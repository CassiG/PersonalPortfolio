import React, { Component } from 'react';
import { default as Fade } from 'react-fade';

class About extends Component {
  render() {
    return(
      <Fade duration = {0.5}>

      <div>

        <h1>What am I up to now?</h1>
        <p>Last Updated: October 18th, 2017</p>
        <h2>Projects in Development</h2>
          {/*<p><strong>PetLibs</strong>: A mad-libs style game that searches Petfinder for eligible pet adoptions that match the game. Currently being built with Node.js and Express. See more on the <a href='https://github.com/CassiG/PetLibs' target='blank_'>github page</a></p>*/}
          <p><strong>30 Projects Project</strong>: A custom-built Wordpress blog documenting the learning process of a new thing through 30 projects. See more on the <a href='https://github.com/CassiG/30-projects-project' target='blank_'>github page</a></p>

          <h2>Other Fun Things</h2>

          <div className="container">
            <div className="row">
              <div className="col-auto"><i className="fa fa-meetup" aria-hidden="true"></i></div>
              <div className="col">Currently seeking new opportunities and networking. I'll see you at: <a href="https://www.eventbrite.com/e/seattle-women-in-digital-kick-off-meeting-tickets-36726705565" target="blank_" rel="noopener noreferrer">Seattle Women in Digital Kick Off Meeting </a> on October 12th, 2017!</div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-laptop" aria-hidden="true"></i></div>
              <div className="col">Helping set up Cogrammers, a community-based in-person meetup group dedicated to helping people learn to code. More info to come on <a href="https://cogrammers.community/" target="blank_" rel="noopener noreferrer">cogrammers.community</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
              <div className="col">Continuing to learn by going through <a href="https://cs50.harvard.edu/" target="blank_" rel="noopener noreferrer">Harvards Online CS50 Course</a> and practicing my algorithm skills on <a href="https://www.hackerrank.com/ccgall" target="blank_" rel="noopener noreferrer">HackerRank</a></div>
            </div>

            <div className="row">
              <div className="col-auto"><i className="fa fa-gamepad" aria-hidden="true"></i></div>
              <div className="col">Playing through <a href="https://www.supergiantgames.com/games/pyre/" target="blank_" rel="noopener noreferrer">Pyre</a> an absolutely gorgeous game by Supergiant Game</div>
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
