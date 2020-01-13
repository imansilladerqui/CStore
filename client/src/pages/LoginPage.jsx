import React from 'react';
import Login from '../components/login';

const LoginPage = (props) => {
    return (
        <div className="body">
            <Login {...props}/>
        </div>

    );
};

export default LoginPage;