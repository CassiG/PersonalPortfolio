import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div>
        <h1>Let's Chat</h1>
        <p className='contact-description'>Want to chat more about web development, video games, or how silly your dog is? Let's chat more. Email me at ccgall@gmail.com or send me a message here! Look forward to talking more!</p>
        <form action="mailto:ccgall@gmail.com">
          <input type="text" className="input-lg" placeholder='Name'></input>
          <input type="email" className="input-lg" placeholder='Email'></input>
          <textarea className="input-lg" placeholder="Message"></textarea>
          <button type="button" className="button">Submit</button>
        </form>
      </div>

    );
  }
}

export default Contact;
