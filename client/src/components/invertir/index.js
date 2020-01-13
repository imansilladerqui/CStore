import React from 'react';

// IMAGES

import declaracionImagen from '../../assets/images/Image-1.png';

const Invertir = () => {

    return (
        <div className="section-6">
            <div className="mycontain v2">
                <h1 className="heading-8 heading-9">Invertir en Criptomonedas es rápido, fácil y seguro</h1>
                <div className="div-block-37">
                    <img src={declaracionImagen} sizes="(max-width: 479px) 90vw, 100vw" alt="" className="image-45"/>
                    <div className="div-block-38">
                        <div className="div-block-39">Cripto Store me dió la
                            <br/>confianza y la ayuda que
                            <br/>necesitaba para empezar a ahorrar de forma inteligente
                            <br/>
                            <br/>
                            <span className="text-span-4">Flor Carreira, Abogada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Invertir;