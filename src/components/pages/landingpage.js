import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Element, animateScroll } from 'react-scroll'
import { properties } from '../utils/properties.js';
import { imagens } from '../utils/imgs.js';
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class Landing extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            open: false
        };

    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (<div >
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
                        <h1>Desenvolvedor Java</h1>

                        <h2>Hey! Bem-vindo ao meu portfólio! </h2>
                        <hr />

                        <p>HTML/CSS | JavaEE (JSF/Primefaces, JPA/Hibernate, JBoss/Tomcat) | Spring Boot | Maven | JS | C# (ENTITYFRAMEWORK, WPF)</p>

                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jubureba/" className="icon-button linkedin" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"></i><span></span></a>
                            {/* Facebook */}
                            <a href="https://facebook.com/jubureba/" className="icon-button facebook" rel="noopener noreferrer" target="_blank">
                                <i className="icon-facebook"></i><span></span></a>
                            {/* GitHub */}
                            <a href="http://github.com/jubureba" className="icon-button github" rel="noopener noreferrer" target="_blank">
                                <i className="icon-github"></i><span></span></a>
                            {/* Youtube */}
                            <a href="#" className="icon-button youtube">
                                <i className="fa fa-youtube"></i><span></span></a>
                            {/* TWITTER */}
                            <a href="https://twitter.com/jubureba" className="icon-button twitter">
                                <i className="icon-twitter"></i><span></span></a>
                        </div>
                    </div>
                </div>

                {/* ============ PROJECTS =======================================*/}

                {/* <Element name="projects" className="projects" ></Element> */}


                <div id="PROJECTS" className="divProjects">
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <h1 className="topics">{properties.projeto_recente}</h1>
                        <hr />
                        <Grid className="demo-grid-ruler">
                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system01} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system01}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={this.onOpenModal}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>
                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system02} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system02}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={this.onOpenModal}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>
                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system03} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system03}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={this.onOpenModal}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>

                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system04} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system04}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={this.onOpenModal}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>

                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system05} className="imgProjects" alt="Website Portfolio in React JS | DOM | GitHub" />
                                    <div className="desc">{properties.desc_system05}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={this.onOpenModal}>{properties.detalhes}</a></div>


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
                        <h1 className="topics">{properties.sobre_mim}</h1>
                        <hr />
                        <p>Lover of technology and programming of systems and games;<br />
                            Unity developer by hobbie in his spare time;<br />
                            Full Stack C # Developer using WPF, ENTITYFRAMEWORK, SQLServer;<br />
                            Experienced in building CRUD applications;<br />

                            Currently studying API Rest, React, React Native, NodeJS, MongoDB, ORM Express.

                        </p>
                    </div>
                </div>


                {/* CONTACT =========================================================*/}
                <div className="contactdiv">
                    <Element name="contact" className="contact" ></Element>
                    <h1 className="topics">{properties.contato}</h1>

                    <hr />
                    <div className="icon-contact">
                        <ul className="horizontal-list">
                            <li>
                                <p className="icon"><i className="fa fa-phone fa-3x" ></i></p>
                                <p className="txtContact">Fone:</p>
                                <p className="txtContact2">{properties.telefone}</p>
                            </li>

                            <li>
                                <p className="icon"><i className="fa fa-envelope fa-3x" ></i></p>
                                <p className="txtContact">Email:</p>
                                <p className="txtContact2">{properties.email}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* FIND ME*/}

                <div id="FINDME" className="backgroundFindme">
                    <div className="findmeDiv">
                        <h1 className="h1findme">{properties.encontre_me}</h1>
                        <hr />

                        <Grid className="demo-grid-ruler">
                            <Cell >
                                <div className="mapa">
                                    <h1 >CURRENT LOCATION:</h1>
                                    <h2>Belém, PA</h2>
                                    {/* <iframe className="mapLocal" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Bel%C3%A9m%2C%20pedreira%2C%20pedro%20miranda%201618+(Find%20me)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"  scrolling="no"></iframe> */}
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


            <Modal open={open} onClose={this.onCloseModal}>
                <div className="Modal">
                    <div className="modal-content">
                        <h2 ref={subtitle => this.subtitle = subtitle}>C# System | WPF | EntityFramework | Linq</h2>
                        <hr />

                        <img width="600" height="500" src={imagens.system01} />

                        <hr />
                        <p>System developed in Visual Studio 2017 using ORM Entity Framework, Linq, WPF GUI with animations</p>

                    </div>
                    <div className="button_cont" align="center"><a className="CloseDetails" onClick={this.onCloseModal} rel="Close">Back to Home Page</a></div>
                </div>
            </Modal>
        </div>

        )
    }
}

export default Landing;