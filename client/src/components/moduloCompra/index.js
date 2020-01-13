// LIBRARIES
import _ from 'lodash';
import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import UserProvider from "../../contexts/UserProvider";

// IMAGES

import triangulo from '../../assets/images/triangulo.svg';

//FETCH HOOK

import {useGetHttpRequest} from '../../contexts/hooks/getHttpRequest';

const ModuloCompra = props => {

  const [isGetLoading, getData] = useGetHttpRequest('/btcvalue', []);
  const [arsQty, setArsQty] = useState('');
  const user = useContext(UserProvider.context);
  const comisionCstore = 2.25;

  let bittexValue = (getData) ? getData.body.attributes.ask : []
  let btcQty = parseFloat(arsQty/bittexValue).toFixed(6);

  useEffect(() => {
    if(localStorage.getItem('arsQty')) {
      setArsQty(localStorage.getItem('arsQty'));
      localStorage.removeItem('arsQty');
    }
  }, [])

  const arsFormat = (param, arsQty) => {
    if (arsQty) {
      return parseFloat(arsQty/param).toFixed(8);
    }
    return param.toLocaleString(undefined, {maximumFractionDigits:2});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(_.isEmpty(user)) {
      localStorage.setItem('arsQty', arsQty);
      props.history.push('/login')
    } else {
      props.history.push('/resumencompra', {
        operationType: 'buy',
        btcValue: bittexValue,
        btcQty: btcQty,
        arsQty: arsQty,
        comisionCstore: comisionCstore,
        userId: user.id
      });
    };
  }

  return (
    <div className="section-2-home herosection-home">
        <div className="div-block-53"></div>
        <div className="mycontain-home containhero-home">
            <div className="w-layout-grid grid-home">
                <div className="div-block-6-home">
                    <h1 className="heading-2-home">Invertí en la nueva economía digital</h1>
                    <div className="text-block-2-home">Te asesoramos para comprar y vender criptomonedas de manera rápida, fácil y segura</div>
                    <Link to='/' className="button-3-home w-button">Por qué invertir en bitcoin?</Link>
                    <div className="text-block-3-home">Sin fees ni cargos extra</div>
                    <div className="text-block-4-home">Pagás en efectivo o transferencia</div>
                    <div className="text-block-5-home">100% Seguro</div>
                </div>
                <div id="w-node-8cc9ab6cb193-5889e3ba" className="div-block-48-home">
                    <div className="form-block-2-home w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="form-2-home w-clearfix">
                            <div className={`div-block-45-home ${(arsQty)? 'ars-sign' : ''}`}>
                                <input
                                  type="number"
                                  className="text-field-home w-input"
                                  maxLength={256}
                                  name="Moneda-2"
                                  data-name="Moneda 2"
                                  placeholder="Ingresá el monto"
                                  id="Moneda-2"
                                  value={arsQty}
                                  onChange={(e)=>{setArsQty(e.target.value)}}
                                />
                                <div className="select-field-2-home">ARS</div>
                            </div>
                            <div className="div-block-home">
                                <div className="text-block-6-home">Comisión: <span className="text-span-2">{` ${comisionCstore}%`}</span></div>
                                <div className="div-block-47">
                                    <p className="paragraph-5">Solo cobramos una comisión fija, no cobramos cargos extra ni otros fees</p>
                                    <img src={triangulo} width="26" alt="" className="image-46"/>
                                </div>
                                <div className="text-block-7-home">Cotización:
                                  <span className="text-span-2"> $ {arsFormat(bittexValue)}</span>
                                </div>
                            </div>
                            <div className="div-block-4 btc-sign">
                                <input
                                  type="number"
                                  className="text-field-2-home w-input"
                                  maxLength={256}
                                  name="Criptomoneda-2"
                                  data-name="Criptomoneda 2"
                                  placeholder={(arsQty) ? arsFormat(bittexValue, arsQty) : 1}
                                  id="Criptomoneda-2"
                                  disabled
                                />
                                <div className="select-field-2-home">BTC</div>
                            </div>
                            <input type="submit" disabled={(!arsQty)} value="Iniciar solicitud" className="submit-button-3-home w-button" onClick={(e)=>{handleSubmit(e)}}/>
                        </form>
                        <div className="text-block-9-home">* Una vez completados todos los datos, te vamos a contactar para concretar la transacción, no vas a tener que ingresar datos de tu tarjeta en la plataforma.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ModuloCompra;
