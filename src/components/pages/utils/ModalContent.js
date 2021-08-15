import React, { Component } from 'react';
import { Modal } from 'react-responsive-modal';
import { Zoom } from 'react-slideshow-image';


export default props =>
    <>
        <Modal open={props.open} onClose={props.onCloseModal}
            closeOnOverlayClick={props.onCloseModal}
            closeOnEsc={props.onCloseModal}
            showCloseIcon={props.onCloseModal}>
            <div class="modal-config">
                <div class="header-modal">
                    <a className="CloseDetails" onClick={props.onCloseModal} rel="Close">Voltar</a>
                    <h2>{props.title}</h2>
                </div>
                <div className="slide-container">
                    <Zoom {...zoomOutProperties} >
                        {props.pic.map((each, index) => (
                            (props.pic.length > 1) ?
                                (<img key={index} style={{ width: "100%" }} src={each} />)
                                :
                                (<img src={each} style={{ width: "100%" }} />)
                        ))}
                    </Zoom>
                </div>

                <div class="content"><p>{props.content}</p></div>

                <div class="actions">
                    {/* <div className="button_cont" align="center"><a className="CloseDetails" onClick={props.onCloseModal} rel="Close">Voltar</a></div> */}
                </div>
            </div>
        </Modal>
    </>


const zoomOutProperties = {
    duration: 30000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};