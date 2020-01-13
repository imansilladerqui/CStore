import React from 'react';

// IMAGES

import Ilustracion1 from '../../assets/images/Ilustracion-1.svg';
import Ilustracion2 from '../../assets/images/Ilustracion-2.svg';
import Ilustracion3 from '../../assets/images/Ilustracion-3.svg';

const ComoComprar = () => {

    return (
        <div className="compramos">
            <div className="mycontain">
                <div className="div-block-30">
                    <h1 className="heading-3">Cómo comprar en CryptoStore</h1>
                    <div className="w-layout-grid grid-5">
                        <div id="w-node-db598ab1dc71-5889e3ba" className="buysquare">
                            <div className="div-block-32">
                                <img src={Ilustracion1} width="154" alt="" className="image-41"/>
                            </div>
                            <h1 className="heading-4"><strong className="bold-text">1. Cotizá tu criptomoneda</strong></h1>
                            <p className="paragraph-3">Ingresa el monto a comprar o  vender para veriﬁcar la cotización del día e<br/>
                            iniciar tu solicitud.<br/>
                            </p>
                        </div>
                        <div className="buysquare">
                            <div className="div-block-33">
                                <img src={Ilustracion2} alt="" className="image-43"/>
                            </div>
                            <h1 className="heading-5">2. Envianos tu solicitud</h1>
                            <p className="paragraph-3">Veriﬁcá los datos ingresados
                                <br/>y envianos tu solicitud de compra para que podamos revisarla.</p>
                        </div>
                        <div className="buysquare">
                            <div className="div-block-32">
                                <img src={Ilustracion3} width="222" alt="" className="image-43"/>
                            </div>
                            <h1 className="heading-6">3. Coordinamos una visita</h1>
                            <p className="paragraph-3">Tu cripto-asesor te va a contactar en breve para coordinar una visita y concretar la compra en nuestros locales oﬁciales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ComoComprar;