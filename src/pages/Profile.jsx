import _ from 'lodash';
import React, {useContext} from "react";
import {useGetHttpRequest} from '../contexts/hooks/getHttpRequest';
import UserProvider from "../contexts/UserProvider";

const Profile = () => {



    const useratio = useContext(UserProvider.context);
    const [isGetLoading, getData] = useGetHttpRequest(`/operation/${useratio.userId}`, [useratio]);

    let render;

    if(!_.isEmpty(getData)) {
        render = getData.body.map((data)=> {
            return (
                <ul>
                    <li>id de la operacion: {data.id}</li>
                    <li>id del usuario:{data.userId}</li>
                    <li>Tipo de operacion: {data.operationType}</li>
                    <li>Valor del BTC en pesos: {data.btcValue}</li>
                    <li>Cantidad de BTC comprada: {data.btcQty}</li>
                    <li>Cantidad de pesos: {data.arsQty}</li> 
                </ul>
            );
        })
    }

    return (
        <div>
            Mi historial de compra
            {render}
        </div>
    );
};

export default Profile;