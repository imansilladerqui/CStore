import _ from 'lodash';
import React from 'react';
import {useGetHttpRequest} from '../../contexts/hooks/getHttpRequest';

// IMAGES

import texturaDerecha from '../../assets/images/Textura-Derecha.svg';
import texturaIzquierda from '../../assets/images/Textura-izquierda.svg';

const moment = require('moment');

const UltimosMovimientos = (props) => {

    const [isGetLoading, getData] = useGetHttpRequest(`/operation/${props.user.id}`, []);

    let render;

    if(getData) {
        render = getData.body.map((data, key)=> {
            return (
            <div className="divtab-mov1" key={key}>
                <div className="divtab-mov2">
                    <div className="texttab-mov-1">Operacion # {key+1}</div>
                </div>
                <div className="divtab-mov2 fecha-box">
                    <div className="texttab-mov-1">Fecha: {moment(data.createdAt).format('DD/MM/YYYY')}</div>
                </div>
                <div className="divtab-mov3">
                    <div className="divtab-mov3-1">
                        <div className="text-block-13">Tipo Operación</div>
                    </div>
                    <div className="divtab-mov3-2">
                        <div className="text-block-14">{(data.operationType === 'buy') ? 'Compra' : 'Venta'}</div>
                    </div>
                </div>
                <div className="divtab-mov4">
                    <div className="divtab-mov4-1">
                        <div className="text-block-13">Cotización BTC en pesos</div>
                    </div>
                    <div className="divtab-mov-4-2">
                        <div className="text-block-14">ARS ${data.btcValue}</div>
                    </div>
                </div>
                <div className="divtab-mov-5">
                    <div className="divtab-mov-5-1">
                        <div className="text-block-13">Bitcoin Recibidos</div>
                    </div>
                    <div className="divtab-mov5-2">
                        <div className="text-block-14">BTC {data.btcQty}</div>
                    </div>
                </div>
                <div className="divtab-mov-6">
                    <div className="divtab-mov-6-1">
                        <div className="text-block-13">Pesos Invertidos</div>
                    </div>
                    <div className="divtab-mov6-2">
                        <div className="text-block-14">ARS ${data.arsQty}</div>
                    </div>
                </div>
            </div>);
        })
    }

    return (
        <div className="sectionmovimientos movimientos">
            <div id="w-node-9dbacc176924-f5cadaa5" className="divmovimientos">
                <div className="divtab-mov7">
                    <h1 className="heading-resumen">Revisá los datos de tu solicitud</h1>
                </div>
                {
                    !_.isEmpty(getData) &&
                    render
                }
                {
                    _.isEmpty(getData) &&
                        <div className="divtab-mov1">
                            <p>No tienes operaciones realizadas aun.</p>
                        </div>
                }
            </div>
            <img src={texturaIzquierda} alt="" className="image-50"/>
            <img src={texturaDerecha} alt="" className="image-49"/>
        </div>
    );
};


export default UltimosMovimientos;