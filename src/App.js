import React from 'react';
import './App.css';
import Main from './components/pages/landingpage';
import { Link } from 'react-scroll'
import { properties } from './components/utils/properties';

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
                <Link activeClass="active" className="navHeader" to="resume" spy={true} smooth={true} duration={500}>{properties.resume}</Link>
                <Link activeClass="active" className="navHeader" to="PROJECTS" spy={true} smooth={true} duration={500}>{properties.projects}</Link>
                <Link activeClass="active" className="navHeader" to="aboutme" spy={true} smooth={true} duration={500}>{properties.sobre_mim}</Link>
                <Link activeClass="active" className="navHeader" to="contact" spy={true} smooth={true} duration={500}>{properties.contato}</Link>
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
