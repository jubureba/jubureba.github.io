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
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            open: false,
            titleModal: "null"
        };

        this.state = { title: properties.desc_system01 }
    }

    changeContent = (title, pic, content) => {
        this.setState({
            title: title,
            pic: pic,
            content: content
        });
    }
    // MONTAR MODAL CONTENT
    onOpenModal(modalId) {
        this.setState({
            open: true,
            modalId
        });
        if (modalId == 1)
            this.changeContent(properties.desc_system01, imagens.system01, properties.desc_compl_system01);
        if (modalId == 2)
            this.changeContent(properties.desc_system02, imagens.system02, properties.desc_compl_system02);
        if (modalId == 3)
            this.changeContent(properties.desc_system03, imagens.system03, properties.desc_compl_system03);
        if (modalId == 4)
            this.changeContent(properties.desc_system04, imagens.system04, properties.desc_compl_system04);
        if (modalId == 5)
            this.changeContent(properties.desc_system05, imagens.system05, properties.desc_compl_system05);
    };

    onCloseModal = () => {
        this.setState({
            open: false,
            
        });
    };

    componentDidMount() {
        document.title = "Anderson Lima | 1.0.0.0"
    }

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
                        <h1>{properties.titulo_principal}</h1>
                        <h2>{properties.bem_vindo}</h2>
                        <hr />
                        <p>{properties.stacks}</p>

                        <div className="social-links">
                            <a href={properties.linkedin} className="icon-button linkedin" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"></i><span></span></a>
                            <a href={properties.facebook} className="icon-button facebook" rel="noopener noreferrer" target="_blank">
                                <i className="icon-facebook"></i><span></span></a>
                            <a href={properties.github} className="icon-button github" rel="noopener noreferrer" target="_blank">
                                <i className="icon-github"></i><span></span></a>
                            <a href={properties.youtube} className="icon-button youtube" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube"></i><span></span></a>
                            <a href={properties.twitter} className="icon-button twitter" rel="noopener noreferrer" target="_blank">
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
                                        <div className="text"><a onClick={() => this.onOpenModal(1)}>{properties.detalhes}</a></div>

                                    </div>
                                </div>

                            </Cell>
                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system02} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system02}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={() => this.onOpenModal(2)}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>
                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system03} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system03}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={() => this.onOpenModal(3)}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>

                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system04} className="imgProjects" alt="C# System | WPF | EntityFramework | Linq" />
                                    <div className="desc">{properties.desc_system04}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={() => this.onOpenModal(4)}>{properties.detalhes}</a></div>
                                    </div>
                                </div>

                            </Cell>

                            <Cell className="cell" col={1}>
                                <div className="containerProject">
                                    <img src={imagens.system05} className="imgProjects" alt="Website Portfolio in React JS | DOM | GitHub" />
                                    <div className="desc">{properties.desc_system05}</div>
                                    <div className="middle">
                                        <div className="text"><a onClick={() => this.onOpenModal(5)}>{properties.detalhes}</a></div>


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
                        <p>
                             {properties.desc_compl_sobre_mim}

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
                                    <iframe className="mapLocal" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pedro%20miranda%20792+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  scrolling="no"></iframe>
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


            <Modal open={open} onClose={this.onCloseModal} 
                closeOnOverlayClick={this.onCloseModal} 
                closeOnEsc={this.onCloseModal} 
                showCloseIcon={this.onCloseModal}> 
                
                <h3 >{this.state.title}</h3>
                <hr />

                <img width="600" height="500" src={this.state.pic} />

                <hr />
                <p>{this.state.content}</p>

                <div className="button_cont" align="center"><a className="CloseDetails" onClick={this.onCloseModal} rel="Close">Back to Home Page</a></div>
            </Modal>
        </div>

        )
    }
}

export default Landing;