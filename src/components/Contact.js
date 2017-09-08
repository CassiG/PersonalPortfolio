import React, { Component } from 'react';
import $ from 'jquery';
import { default as Fade } from 'react-fade';

class Contact extends Component {

  submitForm(e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/ccgall@gmail.com",
      method: "POST",
      data: $('.contact-form').serialize(),
      dataType: "json"
    });
  }

  render() {
    return(
      <Fade duration = {0.5}>
      <div>
        <h1>Let's Chat</h1>
        <p className='contact-description'>Want to chat more about web development, video games, or how silly your dog is? Let's chat more. <br /><br />Email me at ccgall [at] gmail [dot] com or send me a message here! Look forward to talking more!</p>
        <form action="https://formspree.io/ccgall@gmail.com" method="POST">
            <input type="text" name="name" className="input-lg" placeholder='Your Name'></input>
            <input type="email" name="_replyto" className="input-lg" placeholder='Your Email'></input>
            <textarea name="message" placeholder="Your awesome message"></textarea>
            <input type="submit" value="Send"></input>
        </form>
      </div>
      </Fade>

    );
  }
}

export default Contact;
