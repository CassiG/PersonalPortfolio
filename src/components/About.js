import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div className="about-me">
        <h1>About</h1>
        <img src="cassigallagher.jpg" alt="Cassi Gallagher-Shearer" />
        <p>I'm a full-stack web developer based in Seattle, WA. I'm currently seeking new opportunities in the Front-End Development space.</p>

        <p>I'm passionate about creative problem solving and learning new things. I particularly love visual communication and it's role in shaping our understanding of a topic or captivating an audience. With a B.A. in Visual Journalism from <a href ="https://www.wwu.edu/" target="_blank">Western Washington University</a> and a Full-Stack Web Development Certificate from <a href="https://devbootcamp.com/" target="blank_">Dev Bootcamp</a>, so my coding super power is an editor's eye that can catch bug and keep code concise and clean. I love learning new things and currently you can probably find me leveling up my code at HackerRank or Frontend Masters, or attending a Women Who Code Meetup or Hackathon.</p>

        <p>In my free time, you might catch me playing video games (especially if they've got beautiful art or a killer soundtrack - Firewatch and Last of Us come to mind), trying out a new brewery with <a href="http://www.jeffrshearer.com/" target="_blank">my husband </a>, volunteering with <a href ="http://www.theworldisfun.org/" target="_blank">The World is Fun</a>, or <a href ="https://www.instagram.com/leianotorgana/" target="_blank">hanging out with my dog.</a></p>

        <p>I'd love to chat more about code, the latest episode of Game of Thrones, or what podcast you're listening (listen I've got 10 I like already, but I'm always up for trying a new one...). Let's connect!</p>

        <ul>
          <li><a href="https://www.linkedin.com/in/cassigallagher/" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.twitter.com/cassigallagher/" target="_blank">Twitter</a></li>
        </ul>

        <button><a href='CassiGallagherResume.pdf' target="_blank">Download Resume</a></button>
      </div>
    );
  }
}

export default About;
