import React, {createContext, useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import _ from 'lodash';

const context = createContext(null);
const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        if(cookies.mail && _.isEmpty(user)) {
            fetch('/user')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => {
                throw err;
            })
        }
    }, []);

    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
};

UserProvider.context = context;

export default UserProvider;