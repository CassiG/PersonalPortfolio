import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div className="about-me">
        <h1>About</h1>
        <img src="cassigallagher.jpg" alt="Cassi Gallagher-Sherer" />
        <p>I'm Cassi - a full stack web developer and nerd-of-all-trades based of Seattle, WA. I’ve always had two big passions: Problem solving and visual communication. </p>

        <p>The latter first led me to visual journalism, where I learned to have a design eye as well as write and edit. However, problem-solving and code were something I found myself frequently coming back to - from taking a web development certificate in college, to teaching myself to code, to eventually going a fully immersive full-stack development program, Dev Bootcamp, I loved the idea of getting to build things through code.</p>

        <p>Now as a developer, I love being able to combine these two passions. Not only getting to problem solve through code, having a design eye helps me better visualize a problem and also see where a project is going, being an editor gives me a keen eye for detail and is at the forefront of my brain as I code, making me always think about how I can write clean and concise code. </p>

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
