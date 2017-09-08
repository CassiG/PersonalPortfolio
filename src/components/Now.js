import React, { Component } from 'react';
import { default as Fade } from 'react-fade';

class About extends Component {
  render() {
    return(
      <Fade duration = {0.5}>

      <div>

        <h1>What am I up to now?</h1>
        <h2>Projects in Development</h2>
          <p><strong>PetLibs</strong>: A mad-libs style game that searches Petfinder for eligible pet adoptions that match the game. Currently being built with Node.js and Express. See more on the <a href='https://github.com/CassiG/PetLibs' target='blank_'>github page</a></p>

          <h2>Other Fun Things</h2>

          <div className="container">
            <div className="row">
              <div className="col-1"><i className="fa fa-meetup" aria-hidden="true"></i></div>
              <div className="col-10">Currently seeking new opportunities and networking. I'll see you at: <a href="https://www.eventbrite.com/e/a-gentle-introduction-to-functional-programing-with-elixir-tickets-36986903825" target="blank_" rel="noopener noreferrer">A Gentle Introduction to Functional Programing with Elixir</a> on September 6th!</div>
            </div>

            <div className="row">
              <div className="col-1"><i className="fa fa-laptop" aria-hidden="true"></i></div>
              <div className="col-10">Helping set up Cogrammers, a community-based in-person meetup group dedicated to helping people learn to code. More info to come on <a href="https://cogrammers.community/" target="blank_" rel="noopener noreferrer">cogrammers.community</a></div>
            </div>

            <div className="row">
              <div className="col-1"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
              <div className="col-10">Continuing to learn by going through <a href="https://cs50.harvard.edu/" target="blank_" rel="noopener noreferrer">Harvards Online CS50 Course</a> and practicing my algorithm skills on <a href="https://www.hackerrank.com/ccgall" target="blank_" rel="noopener noreferrer">HackerRank</a></div>
            </div>

            <div className="row">
              <div className="col-1"><i className="fa fa-gamepad" aria-hidden="true"></i></div>
              <div className="col-10">Playing through <a href="https://www.supergiantgames.com/games/pyre/" target="blank_" rel="noopener noreferrer">Pyre</a> an absolutely gorgeous game by Supergiant Game</div>
            </div>

            <div className="row">
              <div className="col-1"><i className="fa fa-heart" aria-hidden="true"></i></div>
              <div className="col-10">Making sure I keep my pup's <a href="https://www.instagram.com/leianotorgana/" target='blank_'>social media klout</a> score high</div>
            </div>
          </div>

      </div>
      </Fade>
    );
  }
}

export default About;
