import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Plant from '../img/plant.png';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';



import './index.css'

const Header = () => (
  <div
    style={{
      // background-image: linear-gradient(to right, #e8cbc0 33%, #636fa4 66%);
      background:'white',
      marginBottom: '1.45rem',
      float: 'right',
      }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-end',
        cursor: 'default',
        width: '50vw',


      }}
    >
      {/* <h1 style={{
        color:'black',
        margin: 0
      }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          Scott Harvey
        </Link>
      </h1> */}
      <p className="nav-tag">ABOUT</p>
      <p className="nav-tag">PROJECTS</p>
      <p className="nav-tag">CONTACT</p>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Scott Harvey"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="flex-center main-top">
      <img src={Plant} className="main-img"/>
      <p className="grey small-font">Hello, I'm</p>
      <h1 className="main-name" >Scott Harvey</h1>
      <p className="grey small-font">Front End | Full Stack Developer</p>
      <div className="empty-div"></div>
      <button className="button"> See My Work </button>
    </div>
    <div
      style={{
        // margin: '0 auto',
        // maxWidth: 960,
        // padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      {/* {children()} */}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
