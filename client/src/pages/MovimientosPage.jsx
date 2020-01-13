import React, {useContext} from "react";
import MenuBar from '../components/menus/MenuBar';
import UserProvider from "../contexts/UserProvider";
import UltimosMovimientos from "../components/ultimosMovimientos/index.js";
import {Redirect} from 'react-router';

const MovimientosPage = (props) => {
    const useratio = useContext(UserProvider.context);

    if (!useratio) {
        return <Redirect to='/'/>;
    }

    return (
        <div className="body">
            <MenuBar {...props}/>
            <UltimosMovimientos {...props} user={useratio}/>
        </div>
    );
};

export default MovimientosPage;