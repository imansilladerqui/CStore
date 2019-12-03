import React, {createContext, useState, useEffect} from 'react';

const context = createContext(null);
const UserProvider = ({children}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('/user')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setUser(res)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    console.log(user);

    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    );
};

UserProvider.context = context;

export default UserProvider;