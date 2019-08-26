import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
        <div style ={{width: '100%', margin: 'auto' }}>
            <div className="landing-grid" >
            <img className='bg' src={'https://i.redd.it/cdfz5g8yfymz.png'} />
                    <div className="circle">
                        <img 
                            alt="avatar"
                            className="avatar-img"
                            src="https://i.imgur.com/G5fwVDy.png" />
                    </div>
                    <div className="banner-text">
                        <h1>Full Stack C# Developer</h1>

                        <h2>Hey! Welcome to my Portfolio</h2>
                        <hr/>

                        <p>HTML/CSS | React | React Native | NodeJS | C# | WPF | ENTITYFRAMEWORK</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jubureba/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/* Facebook */}
                            <a href="https://facebook.com/jubureba/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true"/>
                            </a>

                            {/* GitHub */}
                            <a href="http://github.com/jubureba" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                      

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"  aria-hidden="true"/>
                            </a>
                            
                        </div>
                    </div>
               
            </div>
        </div>
        )
    }
}

export default Landing;