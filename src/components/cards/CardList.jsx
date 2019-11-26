import React from 'react';
import Card from './Card';

import {data} from '../../loginData';

const CardList = (arsQty) => {
    return data.map (app => {
        return (
            <Card {...app} key={app.name} arsQty={arsQty} />
        );
    });
};

export default CardList;