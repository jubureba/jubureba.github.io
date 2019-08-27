import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

class Landing extends Component {
  
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                
                <div id="RESUME" className="landing-grid" >
                    <div className="backgroundImg">

                        <div className="circle">
                            <img
                                alt="avatar"
                                className="avatar-img"
                                src="https://i.imgur.com/G5fwVDy.png" />
                        </div>
                        
                        <div className="banner-text">
                            <h1>Full Stack C# Developer</h1>

                            <h2>Hey! Welcome to my Portfolio</h2>
                            <hr />

                            <p>HTML/CSS | React | React Native | NodeJS | C# | WPF | ENTITYFRAMEWORK</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jubureba/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Facebook */}
                                <a href="https://facebook.com/jubureba/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="http://github.com/jubureba" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>


                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* ============ PROJECTS =======================================*/}
                    
                        <div id="PROJECTS" className="divProjects">
                            <div style={{ width: '80%', margin: 'auto' }}>
                                <h1 >RECENT PROJECTS</h1>
                                <hr />
                                <Grid className="demo-grid-ruler">
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 1</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 2</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 3</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 4</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 5</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 6</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 6</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 6</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 6</div>
                                            </div>
                                        </div>

                                    </Cell>
                                    <Cell className="cell" col={1}>
                                        <div className="containerProject">
                                            <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                            <div className="middle">
                                                <div className="text">PROJECT 6</div>
                                            </div>
                                        </div>

                                    </Cell>

                                </Grid>

                            </div>
                        </div>
                    




                    {/* ABOUT ME =========================================================*/}
                    
                        <div id="ABOUTME" className="backgroundAboutme">
                            <div className="aboutmediv">
                                <h1>About Me</h1>
                                <hr />
                                <p>Full Stack C# Developer using WPF, ENTITYFRAMEWORK, SQLServer.
                                    Experienced in building CRUD applications, REST APIs using Node.js and express.
                                    bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla
                            </p>
                            </div>
                        </div>
                    

                    {/* CONTACT =========================================================*/}
                    <div className="contactdiv">

                        <h1>Contact</h1>
                        <hr />
                        <p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p><p>a</p>


                    </div>


                </div>
            </div>
        )
    }
}

export default Landing;