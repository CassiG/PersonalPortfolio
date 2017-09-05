import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div>
        <h1>What am I up to now?</h1>
        <h2>Projects in Development</h2>
          <ul>
            <li><strong>PetLibs</strong>: A mad-libs style game that searches Petfinder for eligable pet adoptions that match the game. <br />Built with Node.js and Express. See more on the <a href='https://github.com/CassiG/PetLibs' target='blank_'>github page</a></li>
          </ul>

          <h2>Other Fun Things</h2>
          <ul>
            <li>Currently seeking new opportunities and spending some time networking. I'll see you at: <a href="https://www.eventbrite.com/e/a-gentle-introduction-to-functional-programing-with-elixir-tickets-36986903825" target="blank_">A Gentle Introduction to Functional Programing with Elixir</a> on September 6th!</li>
            <li>Helping set up Cogrammers, a community-based in-person meetup group dedicated to helping people learn to code. More info to come on <a href="https://cogrammers.community/" target="blank_">cogrammers.community</a></li>
            <li>Continuing to learn by going through <a href="https://cs50.harvard.edu/" target="blank_">Harvard's Online CS50 Course</a> and practicing my algorithm skills on <a href="https://www.hackerrank.com/ccgall" target="blank_">HackerRank</a></li>
            <li>Playing through <a href="https://www.supergiantgames.com/games/pyre/" target="blank_">Pyre</a> an absolutely gorgeous game by Supergiant Game</li>
            <li>Making sure I keep my pup's <a href="https://www.instagram.com/leianotorgana/" target='blank_'>social media klout</a> score high</li>
          </ul>

          <p>Last Updated on September 5th, 2017</p>
      </div>
    );
  }
}

export default About;
