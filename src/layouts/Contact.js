import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import FBicon from '../img/fb.svg'
import GitIcon from '../img/github.svg'
import TwitterIcon from '../img/twitter.svg'
import LinkIcon from '../img/linkedin.svg'



class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-box">
          <div className="social">

            <a href="https://www.facebook.com/scottyharv">
            <img src={FBicon} width={44} height={44}/> </a>
            <a href="https://github.com/scotttharvey">
            <img src={GitIcon} width={44} height={44}/></a>
      <a href="https://www.linkedin.com/in/scotttharvey">
            <img src={LinkIcon} width={44} height={44}/> </a>
      <a href="https://www.twitter.com/scotttharvey">
            <img src={TwitterIcon} width={44} height={44}/> </a>


          </div>
          <div className="contact">
            <div>
              <FontAwesome.FaPhone color='white' size={55}/>
              <p className="contact-p">801 644 5775</p>
            </div>

            <div>
              <FontAwesome.FaEnvelope color='white' size={55}/>
              <p className="contact-p">scottyharvey33@gmail.com</p>
            </div>

          </div>
        </div>

      </div>
    );
  }
}


export default Contact;
