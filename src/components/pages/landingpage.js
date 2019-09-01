import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//Import Imgs
import Logo from '../../components/img/Login.gif';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
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
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>

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
                                        <img src="https://i.imgur.com/gyzFkFE.jpg" className="imgProjects" alt="Project React Js for portfolio" />
                                        <div className="middle">
                                            <div className="text"><a href="#" onClick={this.openModal}>React Js Portfolio</a></div>
                                            <Modal
                                                isOpen={this.state.modalIsOpen}
                                                onAfterOpen={this.afterOpenModal}
                                                onRequestClose={this.closeModal}
                                                style={customStyles}
                                                contentLabel="Example Modal">
                                                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                                                    <imagem src={Logo} alt="loading..."/>
                                                   
                                                    <button onClick={this.closeModal}>close</button>
                                                    
                                                    
                                                </Modal>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT2</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT3</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT4</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT5</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT6</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT7</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT8</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT9</a></div>
                                        </div>
                                    </div>

                                </Cell>
                                <Cell className="cell" col={1}>
                                    <div className="containerProject">
                                        <img src="https://www.w3schools.com/css/img_avatar.png" className="imgProjects" alt="Avatar" />
                                        <div className="middle">
                                            <div className="text"><a href="#">PROJECT</a></div>
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
                            <p>Full Stack C# Developer using WPF, ENTITYFRAMEWORK, SQLServer.
                                Experienced in building CRUD applications, REST APIs using Node.js and express.
                                bla bla bla blabla bla bla blabla bla bla blabla bla bla blabla bla bla bla
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
                                        <h2>Belém, PA</h2>
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
