import React, {createContext, useState, useEffect} from 'react';
import _ from 'lodash';

const context = createContext(null);
const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if(_.isEmpty(user)) {
            fetch('/user')
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => {
                throw err;
            })
        }
    }, []);
    return (
        <context.Provider value={user.body}>
            {children}
        </context.Provider>
    );
};

UserProvider.context = context;

export default UserProvider;