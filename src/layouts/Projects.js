import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import MusicPic from '../img/concertPic-min.jpg'
import Sik from '../img/sikCover.png'
import Tesla from '../img/tesla.png'
import Br from '../img/br.png'





class Projects extends Component {
  render() {
    return (
      <div className="project-container">
        <h1>Projects</h1>
        <div className="my-projects">
          <div className="project">
            <a href="https://scotttharvey.github.io/teslaClone/#/models" class="portfolio-box">
            <img src={Tesla} height="215px" width="100%" />
            </a>
            <h3>Tesla Clone</h3>
          </div>


          <div className="project">
            <a href="http://scotttharvey.github.io/no-Server/" class="portfolio-box">

            <img src={Sik} height="215px" width="100%" />

            </a>
            <h3>No Server</h3>
          </div>


          <div className="project">

            <a href="http://scotttharvey.github.io/iTUNESclone/" class="portfolio-box">
              <img src={MusicPic} height="215px" width="100%" />
            </a>
            <h3>Itunes Clone</h3>
          </div>


          <div className="project">
            <div style={{width:'90%', height:'65%', background:'orange'}}>

            </div>
            <a href="http://bucketrukus.com" class="portfolio-box">
                    <img src={Br} height="215px" width="100%" />
            </a>
            <h3>Bucket Rukus</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Projects;
