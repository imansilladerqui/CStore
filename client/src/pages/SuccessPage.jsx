import React, {useContext} from "react";
import UserProvider from "../contexts/UserProvider";
import Success from '../components/success';
import {Redirect} from 'react-router';

const SuccessPage = (props) => {

    const user = useContext(UserProvider.context);

    if (!user) {
        return <Redirect to='/'/>;
    }
    return (
        <div className="body">
            <Success {...props}/>
        </div>

    );
};

export default SuccessPage;