import React, { Component } from 'react';
// import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
import * as FontAwesome from 'react-icons/lib/fa';
// var FontAwesome = require('react-fontawesome');


class AboutMe extends Component {
  render() {
    return (
      <div className="about-section">
        <h1>Things I Enjoy</h1>
        <div className="like-container">
          <div className="item">
            {/* <i className="fa fa-plane fa-fw fa-1x about-icons"/> */}
            <FontAwesome.FaPlane size={45}/>
            {/* <FontAwesome name='plane' size='2x' /> */}
            <h3>Travel</h3>
            <p>Love experiencing new parts of the world. I hope to travle all over the world with my wife </p>
          </div>

          <div className="item">
            {/* <i className="fa fa-cutlery fa-fw fa-1x about-icons"/> */}
            <FontAwesome.FaCutlery size={45}/>

            <h3>Cooking</h3>
            <p>I like cooking, but i love eating. I try to cook as many meals for myself as i can</p>
          </div>

          <div className="item">
            {/* <i className="fa fa-code fa-fw fa-1x about-icons"/> */}
            <FontAwesome.FaCode size={45}/>

            <h3>Code</h3>
            <p>I love the challenge of solving problems, and seeing my creations come to life</p>
          </div>

          <div className="item">
            {/* <div className="about-lift about-icons"/> */}
            <FontAwesome.FaHeartbeat size={45}/>

            <h3>Exercise</h3>
            <p>Staying in shape is a big deal to me. I think a healthy body is the first step to a healthy life</p>
          </div>
        </div>



      </div>
    );
  }
}

export default AboutMe;
