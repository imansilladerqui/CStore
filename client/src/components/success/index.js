import React from 'react';
import {Link} from 'react-router-dom';

import successImage from '../../assets/images/undraw_done_a34v.svg';

import texturaDerecha from '../../assets/images/Textura-Derecha.svg';
import texturaIzquierda from '../../assets/images/Textura-izquierda.svg';

const Success = () => {

    return (
        <div className="sectionsuccess success">
            <div id="w-node-03fd8e9c48e1-2b0cfbff" className="divsuccess">
                <div className="divsuccess-1">
                    <h1 className="heading-success">Solicitud iniciada :)</h1>
                </div>
                <div className="divsuccess-2">
                    <img src={successImage} alt="" className="image-60"/>
                </div>
                <div className="divsuccess-3">
                    <div className="text-block-17">En la brevedad te llegará un mail y nos contactaremos con vos para efectuar la transacción</div>
                </div>
                <div className="signup-success w-form">
                    <Link to="/" className="success-button-1 w-button">SOLICITAR OTRA TRANSACCIÓN</Link>
                    <Link to="/ultimosmovimientos" className="success-button-2 w-button">ÚLTIMOS MOVIMIENTOS</Link>
                    <Link to="/" className="success-button-2 w-button">VOLVER AL INICIO</Link>
                </div>
            </div>
            <img src={texturaIzquierda} alt="" className="image-50"/>
            <img src={texturaDerecha} alt="" className="image-49"/>
        </div>
    );
};


export default Success;