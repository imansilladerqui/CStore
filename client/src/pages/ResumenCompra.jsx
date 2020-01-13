import React, {useContext} from "react";
import UserProvider from "../contexts/UserProvider";
import TotalCompra from '../components/totalcompra';
import {Redirect} from 'react-router';

const ResumenCompra = (props) => {

    const user = useContext(UserProvider.context);

    if (!user) {
        return <Redirect to='/'/>;
    }
    return (
        <div className="body">
            <TotalCompra user={user} {...props}/>
        </div>

    );
};

export default ResumenCompra;