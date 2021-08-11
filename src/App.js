import React from 'react';
import './App.css';
import Main from './components/pages/landingpage';
import { Link } from 'react-scroll'
import { properties } from './components/utils/properties';
import { typing } from './components/utils/typing';

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
            {/* {this.state.typing ?  <Typist onTypingDone={this.done} > <Typist.Backspace count={5} delay={50}/> <h1 id="logo"> ANDERSON THIAGO</h1> </Typist> : '' } */}

            <h1 id="logo"> ANDERSON  
              
              <span 
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " LIMA", " PORTFÓLIO.", " (Pure JS.)", " DESENVOLVEDOR", " xD!" ]'>
              </span>
            </h1>
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
