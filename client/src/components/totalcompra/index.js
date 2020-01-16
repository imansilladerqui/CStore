import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

//FETCH HOOK

import {useGetHttpRequest} from '../../contexts/hooks/getHttpRequest';
import {PostHttpRequest} from '../../contexts/hooks/postHttpRequest';

import texturaDerecha from '../../assets/images/Textura-Derecha.svg';
import texturaIzquierda from '../../assets/images/Textura-izquierda.svg';

import 'react-phone-number-input/style.css';


const TotalCompra = (props) => {

    const [checkConditions, setCheckConditions] = useState(false);
    const [state, setState] = useState({
        operation: props.location.state,
        user: props.user
    })
    const [phoneValue, setPhoneValue] = useState(props.user.tel || '')
    const [isGetLoading, getGeoData] = useGetHttpRequest('https://ipapi.co/json/', []);

    useEffect(() => {
        if(localStorage.getItem('state')) {
            setState(localStorage.getItem('state'));
        }
    }, [])

    let comisionCstore = ((parseFloat(state.operation.arsQty)/100)*state.operation.comisionCstore);

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.setItem('state', JSON.stringify(props.location.state));
        PostHttpRequest('PUT', '/user/update', {
            tel: phoneValue
        });
        localStorage.removeItem('state');
        return PostHttpRequest('POST', '/operation', {
            operationType: 'buy',
            btcValue: state.operation.btcValue,
            btcQty: state.operation.btcQty,
            comisionCstore: comisionCstore,
            arsQty: state.operation.arsQty,
            userId: state.operation.userId,
            user: state.user,
            userPhone: phoneValue
        }, '/success');
      }

    return (
        <div className="sectionresumen resumen">
            <div id="w-node-5a0ec481561f-4a87665c" className="divresumen div-block-54">
                <div className="div-block-63">
                    <h1 className="heading-resumen">Revisá los datos de tu solicitud</h1>
                </div>
                <div className="div-block-61">
                    <div className="div-block-59-copy">
                        <div className="text-block-13-copy">Detalles de la transferencia</div>
                    </div>
                    <div className="div-block-59">
                        <div className="div-block-58">
                            <div className="text-block-13">Pagos</div>
                        </div>
                        <div className="div-block-60">
                            <div className="text-block-14">ARS ${state.operation.arsQty}</div>
                        </div>
                    </div>
                    <div className="div-block-59">
                        <div className="div-block-58">
                            <div className="text-block-13">Comisión</div>
                        </div>
                        <div className="div-block-60">
                            <div className="text-block-14">ARS ${parseFloat(comisionCstore).toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="div-block-59">
                        <div className="div-block-58">
                            <div className="text-block-13">Recibís</div>
                        </div>
                        <div className="div-block-60">
                            <div className="text-block-14">BTC {state.operation.btcQty}</div>
                        </div>
                    </div>
                    <div className="div-block-59">
                        <div className="div-block-58 phonebox">
                            <div className="text-block-13">Telefono para contacto</div>
                            <PhoneInput
                            defaultCountry={(getGeoData)?getGeoData.country:"AR"}
                            international={false}
                            placeholder="Ingresa el numero de telefono"
                            value={phoneValue}
                            onChange={setPhoneValue}/>
                        </div>
                    </div>
                </div>
                <div className="signup w-form">
                    <label className="w-checkbox checkbox-field">
                        <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" required="" className="w-checkbox-input" onChange={()=>{setCheckConditions(!checkConditions)}}/>
                        <span className="w-form-label">Términos y condiciones</span>
                    </label>
                    <input type="submit" value="SOLICITAR TRANSACCIÓN" disabled={(!checkConditions || !phoneValue)}className="submit-button-3 w-button" onClick={(e)=>{handleSubmit(e)}} />
                </div>
                <div id="Home" className="text-block-16">
                    <Link to="/">Cancelar</Link>
                </div>
            </div>
            <img src={texturaIzquierda} alt="" className="image-50"/>
            <img src={texturaDerecha} alt="" className="image-49"/>
        </div>
    );
};


export default TotalCompra;