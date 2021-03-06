import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactDOM from 'react-dom';

import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};


class Landing extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div >
                <Element name="resume" className="resume" ></Element>
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
                              
                                <a href="https://www.linkedin.com/in/jubureba/" class="icon-button linkedin" target="_blank">
                                    <i class="fa fa-linkedin"></i><span></span></a>

                                {/* Facebook */}
                                <a href="https://facebook.com/jubureba/" class="icon-button facebook" target="_blank">
                                    <i class="icon-facebook"></i><span></span></a>

                                {/* GitHub */}
                                <a href="http://github.com/jubureba" class="icon-button github" target="_blank">
                                    <i class="icon-github"></i><span></span></a>

                                {/* Youtube */}
                                <a href="#" class="icon-button youtube">
                                    <i class="fa fa-youtube"></i><span></span></a>
                                {/* TWITTER */}
                                <a href="https://twitter.com/jubureba" class="icon-button twitter">
                                    <i class="icon-twitter"></i><span></span></a>
                                

                            </div>
                        </div>
                    </div>

                    {/* ============ PROJECTS =======================================*/}

                    <div id="PROJECTS" className="divProjects">
                        <div style={{ width: '80%', margin: 'auto' }}>
                            <Element name="projects" className="projects" ></Element>
                            <h1 >RECENT PROJECTS</h1>
                            <hr />
                            <Grid className="demo-grid-ruler">
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src={require('./../img/Login.gif')} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                        <div class="desc">C# System | WPF | EntityFramework | Linq</div>
                                        <div className="middle">
                                            <div className="text"><a onClick={this.openModal}>Details</a></div>
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                onAfterOpen={this.afterOpenModal}
                                                onRequestClose={this.closeModal}
                                                style={customStyles}
                                                contentLabel="Example Modal">
                                                <div className="Modal">
                                                    <h2 ref={subtitle => this.subtitle = subtitle}>C# System | WPF | EntityFramework | Linq</h2>
                                                    <hr/>
            
                                                            <img width="600" height="500" src={require('./../img/Login.gif')} />
                            
                                                    <hr/>
                                                    <p>System developed in Visual Studio 2017 using ORM Entity Framework, Linq, WPF GUI with animations</p>
                                                    <div class="button_cont" align="center"><a class="CloseDetails" onClick={this.closeModal} rel="Close">Back to Home Page</a></div>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src={require('./../img/System01.jpg')} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                        <div class="desc">C# System | WPF | EntityFramework | Linq</div>
                                        <div className="middle">
                                            <div className="text"><a onClick={this.openModal}>Details</a></div>
                                            
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                onAfterOpen={this.afterOpenModal}
                                                onRequestClose={this.closeModal}
                                                style={customStyles}
                                                contentLabel="Example Modal">
                                                <div className="Modal">
                                                    <h2 ref={subtitle => this.subtitle = subtitle}>C# System | WPF | EntityFramework | Linq</h2>
                                                    <hr/>
            
                                                            <img width="600" height="500" src={require('./../img/System01.jpg')} />
                            
                                                    <hr/>
                                                    <p>System developed in Visual Studio 2017 using ORM Entity Framework, Linq, WPF GUI with animations</p>
                                                    <div class="button_cont" align="center"><a class="CloseDetails" onClick={this.closeModal} rel="Close">Back to Home Page</a></div>
                                                </div>
                                            </Modal>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src={require('./../img/System02.jpg')} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                        <div class="desc">PHP System | AdminLTE 2 | PostgreSQL | Bootstrap</div>
                                        <div className="middle">
                                            <div className="text"><a onClick={this.openModal}>Details</a></div>
                                            
                                            
                                        </div>
                                    </div>

                                </Cell>

                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src={require('./../img/System03.jpg')} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                        <div class="desc">Java System | GUI in Swing | PhpMyAdmin</div>
                                        <div className="middle">
                                            <div className="text"><a onClick={this.openModal}>Details</a></div>
                                            
                                            
                                        </div>
                                    </div>

                                </Cell>

                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src={require('./../img/SystemReact.gif')} className="imgProjects" alt="Website Portfolio in React JS | DOM | GitHub" />
                                        <div class="desc">Website Portfolio in React JS | DOM | GitHub</div>
                                        <div className="middle">
                                            <div className="text"><a onClick={this.openModal}>Details</a></div>
                                            
                                            
                                        </div>
                                    </div>

                                </Cell>
                               

                            </Grid>

                        </div>
                    </div>

                    {/* ABOUT ME =========================================================*/}

                    <div id="ABOUTME" className="backgroundAboutme">
                        <Element name="aboutme" className="aboutme" ></Element>
                        <div className="aboutmediv">
                            <h1>ABOUT ME</h1>
                            <hr />
                            <p>Lover of technology and programming of systems and games;<br/>
                                Unity developer by hobbie in his spare time;<br/>
                                Full Stack C # Developer using WPF, ENTITYFRAMEWORK, SQLServer;<br/>
                                Experienced in building CRUD applications;<br/>

                                Currently studying API Rest, React, React Native, NodeJS, MongoDB, ORM Express.
                                
                            </p>
                        </div>
                    </div>


                    {/* CONTACT =========================================================*/}
                    <div className="contactdiv">
                        <Element name="contact" className="contact" ></Element>
                        <h1>CONTACT</h1>

                        <hr />
                        <div className="icon-contact">
                            <ul className="horizontal-list">
                                <li>
                                    <p className="icon"><i class="fa fa-phone fa-3x" ></i></p>
                                    <p className="txtContact">Fone:</p>
                                    <p className="txtContact2">(91)99602-4230</p>
                                </li>

                                <li>
                                    <p className="icon"><i class="fa fa-envelope fa-3x" ></i></p>
                                    <p className="txtContact">Email:</p>
                                    <p className="txtContact2">eng.thiagolima@hotmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* FIND ME*/}

                    <div id="FINDME" className="backgroundFindme">
                        <div className="findmeDiv">
                            <h1 className="h1findme">FIND ME</h1>
                            <hr />

                            <Grid className="demo-grid-ruler">
                                <Cell >
                                    <div className="mapa">
                                        <h1 >CURRENT LOCATION:</h1>
                                        <h2>Bel??m, PA</h2>
                                        <iframe className="mapLocal" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Bel%C3%A9m%2C%20pedreira%2C%20pedro%20miranda%201618+(Find%20me)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    </div>
                                </Cell>



                                <Cell >
                                    <div className="socialnet">
                                        <h1> FIND ME ON:</h1>
                                        <div className="social-links">
                                            {/* LinkedIn */}
                                            <a href="https://www.linkedin.com/in/jubureba/" rel="noopener noreferrer" target="_blank">
                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                            </a>

                                            {/* Facebook */}
                                            <a href="https://facebook.com/jubureba/" rel="noopener noreferrer" target="_blank">
                                                <i className="fa fa-facebook-f" aria-hidden="true" />
                                            </a>

                                            {/* GitHub */}
                                            <a href="http://github.com/jubureba" rel="noopener noreferrer" target="_blank">
                                                <i className="fa fa-fw fa-github" aria-hidden="true" />
                                            </a>


                                            {/* Youtube */}
                                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                                <i className="fa fa-youtube" aria-hidden="true" />
                                            </a>

                                        </div>
                                    </div>
                                </Cell>
                            </Grid>



                        </div>
                    </div>

                    {/* RODAPE =========================================================*/}
                    <div className="backgroundRodape">
                        <div className="rodape">

                            <hr />
                            <p>Copyright @ Anderson Thiago 2019</p>
                        </div>
                    </div>


                </div>
            </div>
        
        
        )
    }
}

export default Landing;
