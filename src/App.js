import React from 'react';
import './App.css';
import Main from './components/pages/landingpage';
import { configureAnchors } from 'react-scrollable-anchor';
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
            <h1 id="logo">ANDERSON THIAGO</h1>
            <nav>
              <a href="#RESUME">RESUME</a>
              <a href="#PROJECTS">PROJECTS</a>
              <a href="#ABOUTME">ABOUT ME</a>
              <a href="#CONTACT">CONTACT</a>
            </nav>
          </div>
        </header>
        
      </div>
      <div >
           <div className="page-content" />
            <Main/>
            
            </div>
    </div>
  );
        }
}
