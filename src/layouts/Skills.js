import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';


class Skills extends Component {
  render() {
    return (
      <div className="skills-section">
        <h1>Skills</h1>
        <div className="skills-container">

          <div className="skill-column">
            {/* <i className="fa fa-server fa-fw fa-1x skills-icons"/> */}
            <FontAwesome.FaServer size={55}/>

            <div>
              <p>Node</p>
              <p>PHP</p>
            </div>
          </div>
          <div className="skill-column">
            {/* <i className="fa fa-code fa-fw fa-2x skills-icons"/> */}
            <FontAwesome.FaCode size={55}/>

            <div>
              <p>HTML 5</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>React</p>
              <p>React Native</p>
              <p>Angular</p>
            </div>

          </div>
          <div className="skill-column">
            {/* <i className="fa fa-database fa-fw fa-1x skills-icons"/> */}
            <FontAwesome.FaDatabase size={55}/>

            <div>
              <p>mySQL</p>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Skills;
