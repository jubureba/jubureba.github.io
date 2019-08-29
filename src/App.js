import React from 'react';
import './App.css';
import Main from './components/pages/landingpage';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
   
  }


  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 40,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    return (

      <div className="demo-big-content">
        <div id="wrapper">
          <header id="js-header">
            <div className="container clearfix">
              <h1 id="logo"> ANDERSON THIAGO</h1>
              <nav>
                <a href="#RESUME" ><Link activeClass="active" className="navHeader" to="resume" spy={true} smooth={true} duration={500}>RESUME</Link></a>
                <a href="#PROJECTS" ><Link activeClass="active" className="navHeader" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link></a>
                <a href="#ABOUTME"><Link activeClass="active" className="navHeader" to="aboutme" spy={true} smooth={true} duration={500}>ABOUT ME</Link></a>
                <a href="#CONTACT"><Link activeClass="active" className="navHeader" to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></a>
                
              </nav>
            </div>
          </header>

        </div>
        <div >
          <div className="page-content" />

          <Main />

        </div>
      </div>
    );
  }
}
